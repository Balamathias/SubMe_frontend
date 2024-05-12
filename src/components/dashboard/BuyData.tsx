'use client'

import { Tables } from '@/database.types'
import React, { useState } from 'react'
import { toast } from 'sonner'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { useSearchParams, useRouter } from 'next/navigation'
import { networks } from '@/utils/networks'
import Image from 'next/image'
import { convertNetworkNameToNetworkCode, filterPlans } from '@/lib/n3tdata/data'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { sendData } from '@/lib/n3tdata'
import { nanoid } from 'nanoid'
import { getWallet, updateWalletBalance, upsertWallet } from '@/lib/supabase/wallets'
import { formatNigerianNaira } from '@/utils/formatCurrency'
import ConfirmPurchase from './ConfirmPurchase'
import { upsertHistory } from '@/lib/supabase/history'
import { useCurrentUser } from '@/providers/user-provider'
import { Networks } from '@/lib/n3tdata/types'
import { NewFactorListInstance } from 'twilio/lib/rest/verify/v2/service/entity/newFactor'

const BuyData = ({network: _network}: {network?: string, user?: Tables<'users'>}) => {
    const user = useCurrentUser()?.currentAccountUser
    const searchParams = new URLSearchParams(useSearchParams().toString())
    const router = useRouter()
    const [network, setNetwork] = useState(searchParams.get('network'))

    const upperNetworkName = network?.toUpperCase()
    const plans = filterPlans(upperNetworkName as any)
    const [networkObj, setNetworkObj] = useState(networks.find(n => n.value === network))
    
    const [isPending, setIsPending] = React.useState(false)
    const [phone, setPhone] = useState(user?.phone || '')
    const [cat, setCat] = useState<'SME' | 'CGIFT'>('SME')
    const [plan, setPlan] = useState('')
    const [imgURL, setImgURL] = useState(networkObj?.imgURL as string | undefined)
    
    const [confirmDetails, setConfirmDetails] = useState(false)
    const [notFundable, setNotFundable] = useState(false)
    const [confirmModalOpen, setConfirmModalOpen] = useState(false)


    const handlePurchase = async () => {
        const [_plan, dataAmount, price] = plan.split('+')

        try {
            setIsPending(true)
            const {data: wallet} = await getWallet()

            if (wallet) {
                const balance = parseFloat(wallet.balance?.toString() || '0')
                const parsedPrice = parseFloat(price)
                if (balance < parsedPrice) {
                    toast.error("Insufficient Funds", {
                        description: 'Please fund your wallet to top up.',
                        duration: 10000,
                        action:  (
                            <Button 
                                className='bg-gradient-to-tr from-yellow-400 to-yellow-600'
                                onClick={() => router.push('/dashboard/fund-wallet')}
                            >
                                Fund Wallet
                            </Button>
                        )
                    })
                    setNotFundable(true)
                    return
                }
                const computedBalance = balance - parsedPrice

                const walletResponse = await updateWalletBalance(wallet?.id, computedBalance)

                if (!walletResponse.data) {
                    return toast.error('Error!', {description: 'We could not charge this amount on your wallet. Please try again '})
                }

                const res = await sendData({
                    "request-id": 'Data_' + nanoid(10),
                    bypass: false,
                    data_plan: parseInt(_plan),
                    network: convertNetworkNameToNetworkCode(upperNetworkName as Networks),
                    phone: phone
                })
                if (res.OK) {
                    toast.success('Success', {description: `You bought ${_plan} data plan for ${phone} on ${upperNetworkName}`})
                    const historyRes = await upsertHistory({
                        description: `You bought ${_plan} data plan for ${phone} on ${upperNetworkName}`,
                        title: 'Data Purchase',
                        type: 'data',
                        user: user?.id!,
                        meta_data: JSON.stringify({
                            network: upperNetworkName,
                            plan: _plan,
                            phone,
                            amount: price
                        }),
                    })

                    if (!historyRes.data) {
                        console.error(historyRes.error)
                        return toast.error('Error!', {description: 'We could not save this transaction. Please try again '})
                    }
                }
                else {
                    const walletResponse = await updateWalletBalance(wallet?.id, balance)
                    if (!walletResponse.error) {
                        toast.error('Error!', {description: 'We could not complete this transaction. Please try again '})
                    }
                }
                // router.replace(`?success=true`)
            } else {
                toast.info("Info", {description: 'An unknown error occured, please --try again.'})
            }
            //  toast.success('Success')

        } catch (err: any) {
            console.log(err)
            toast.error('Error!', {description: err?.message+' An unknown error occured, please try again.', descriptionClassName: 'text-rose-500',className: 'border border-rose-600'})
            setIsPending(false)
            throw err
        }finally {
            setIsPending(false)
        }
    }

    const handleConfirmModalOpen = async () => {
        if (!plan || !network || !cat || !phone) return toast.error("Invalid Input", {description: "Please validate all the fields before you proceed."})
        setConfirmModalOpen(true)
        if (!confirmDetails) return
    }

  return (
    <div className='flex flex-col gap-3 py-3 mb-20'>
            <div className="flex flex-col gap-3 py-3">
                <h1 className='text-xl font-semibold'>Buy Data</h1>
                <Image 
                    src={imgURL || '/glass/images/wifi.png'} 
                    alt={networkObj?.name || 'Network'} 
                    width={50} 
                    height={50} 
                    quality={100}
                    className='object-cover h-24 w-24'
                    key={networkObj?.imgURL || 'network-img'} 
                />
            </div>

            <Card className='flex flex-col gap-2 space-y-3 shadow-none border-none w-full max-w-[450px]'>
                <div className="flex flex-col gap-2">
                    <Label htmlFor='phone'>Phone Number</Label>
                    <Input defaultValue={phone} id="phone" onChange={e => setPhone(e.target.value)} />
                </div>
                <div className="flex items-center gap-5 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <Label htmlFor='network'>Network</Label>
                        <Select defaultValue={upperNetworkName || ''} onValueChange={(e) => {
                            setNetwork(e)
                            searchParams.set('network', e.toLowerCase())
                            setImgURL(networks.find(n => n.value === e.toUpperCase())?.imgURL)
                            router.push('?' + searchParams.toString())
                            setNetworkObj(networks.find(n => n.value === e.toUpperCase()))
                        }}>
                            <SelectTrigger id='network'>
                                <SelectValue placeholder="Select Network" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='GLO'>GLO</SelectItem>
                                <SelectItem value="MTN">MTN</SelectItem>
                                <SelectItem value="AIRTEL">AIRTEL</SelectItem>
                                <SelectItem value="9MOBILE">9MOBILE</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <Label htmlFor='cat'>Type</Label>
                        <Select defaultValue={cat} onValueChange={(e: 'SME' | 'CGIFT') => setCat(e)}>
                            <SelectTrigger id='cat'>
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='SME'>SME</SelectItem>
                                <SelectItem value="CGIFT">CGIFT</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <Label htmlFor='plan'>Data Plan</Label>

                    <Select defaultValue={plan}  onValueChange={e => setPlan(e)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Data Plan"/>
                        </SelectTrigger>
                        <SelectContent className="w-full flex flex-1">
                            {
                                plans
                                .map(plan => (
                                    <SelectItem key={plan.id} value={`${plan.id.toString()}+${plan.dataAmount}+${plan.price}`} className="w-full flex-1 min-w-max">
                                        <div className="flex justify-between flex-1 items-center py-2 !w-full gap-5 max-xs:min-w-[250px] md:min-w-[500px]">
                                            <span className='flex-1 mr-auto'>{plan.dataAmount}</span>
                                            <b className="flex-1 mx-auto">{formatNigerianNaira(parseFloat(plan.price))}</b>
                                            <span className="flex-1 ml-auto whitespace-nowrap">{plan.duration}</span>
                                        </div>
                                    </SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                </div>
                <Button 
                    type="submit" 
                    disabled={isPending}
                    onClick={async () => await handleConfirmModalOpen()} 
                    className='mt-2 bg-gradient-to-tr from-primary to-pink-600 hover:bg-fuchsia-700 transition-all w-full'
                >{isPending ? 'Processing...' : 'Buy'}</Button>
            </Card>

            <ConfirmPurchase 
                phone={phone} 
                plan={plan.split('+').at(1)!} 
                amount={plan.split('+').at(2)!}
                network={upperNetworkName!}
                open={confirmModalOpen} 
                setOpen={setConfirmModalOpen} 
                handlePurchase={handlePurchase}
            />
    </div>
  )
}

export default BuyData