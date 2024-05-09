'use client'

import { Tables } from '@/database.types'
import React, { useState } from 'react'
import { toast } from 'sonner'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { useSearchParams, useRouter } from 'next/navigation'
import { networks } from '@/utils/networks'
import Image from 'next/image'
import { filterPlans } from '@/lib/n3tdata/data'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { sendData } from '@/lib/n3tdata'
import { nanoid } from 'nanoid'
import { getWallet } from '@/lib/supabase/wallets'
import { formatNigerianNaira } from '@/utils/formatCurrency'
import ConfirmPurchase from './ConfirmPurchase'
import { upsertHistory } from '@/lib/supabase/history'

const BuyData = ({network: _network, user}: {network?: string, user: Tables<'users'>}) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const network = searchParams.get('network')

    const networkObj = networks.find(n => n.value === network)

    const [isPending, setIsPending] = React.useState(false)
    const [phone, setPhone] = useState(user?.phone || '')
    const [cat, setCat] = useState<'SME' | 'CGIFT'>('SME')
    const [plan, setPlan] = useState('')

    const [confirmDetails, setConfirmDetails] = useState(false)
    const [notFundable, setNotFundable] = useState(false)
    const [confirmModalOpen, setConfirmModalOpen] = useState(false)

    const upperNetworkName = network?.toUpperCase()
    const plans = filterPlans(upperNetworkName as any)

    const handlePurchase = async () => {
        const [_plan, price] = plan.split('+')

        try {
            setIsPending(true)
            const {data} = await getWallet()

            if (data) {
                const balance = parseFloat(data.balance?.toString() || '0')
                const parsedPrice = parseFloat(price)
                if (balance < parsedPrice) {
                    toast.error("Insufficient Funds", {
                        description: 'Please fund your wallet to top up.',
                        duration: 10000,
                        action: (
                            <Button 
                                className='bg-gradient-to-tr from-yellow-400 to-yellow-600'
                                onClick={() => router.push('/dashboard/fund-wallet')}
                            >
                                Fund Wallet
                            </Button>
                        )
                    })
                }
                setNotFundable(true)
                return;
            }

            const {status} = await sendData({
                "request-id": nanoid(16),
                bypass: false,
                data_plan: parseInt(_plan),
                network: upperNetworkName as any,
                phone: phone
            })

            if (status === 200) {
                toast.success('Success', {description: `You bought ${_plan} data plan for ${phone} on ${upperNetworkName}`})

                const {error} = await upsertHistory({
                    description: `You bought ${_plan} data plan for ${phone} on ${upperNetworkName}`,
                    title: 'Data Purchase',
                    type: 'data',
                    user: user.id,
                })

                if (error) return toast.error('Error!', {description: 'We could not save this transaction to your history. Please try again '})

                router.replace(`?success=true`)
            }

            return toast.success('Success')

        } catch (err: any) {
            console.log(err)
            toast.error('Error!', {description: 'An unknown error occured, please try again.', descriptionClassName: 'text-rose-500',className: 'border border-rose-600'})
            setIsPending(false)
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
    <div className='flex flex-col gap-3 py-3'>

        <div className="flex flex-col gap-3 py-3">
            <h1 className='text-xl font-semibold'>Buy Data</h1>
            <Image 
                src={networkObj?.imgURL!} 
                alt={networkObj?.name!} 
                width={50} 
                height={50} 
                quality={100}
                className='object-cover h-24 w-24'
            />
        </div>

            <Card className='flex flex-col gap-2 space-y-3 shadow-none border-none w-full max-w-[450px]'>
                <div className="flex flex-col gap-2">
                    <Label htmlFor='phone'>Phone Number</Label>
                    <Input defaultValue={phone} id="phone" onChange={e => setPhone(e.target.value)} />
                </div>

                <div className="flex flex-col gap-2">
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

                <div className="flex flex-col gap-2">
                    <Label htmlFor='plan'>Data Plan</Label>

                    <Select defaultValue={plan}  onValueChange={e => setPlan(e)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Data Plan"/>
                        </SelectTrigger>
                        <SelectContent className="w-full">
                            {
                                plans
                                .map(plan => (
                                    <SelectItem key={plan.id} value={`${plan.id.toString()}+${plan.dataAmount}+${plan.price}`} className="w-full flex-1">
                                        <div className="flex justify-between flex-1 items-center py-2 w-full gap-5 min-w-full">
                                            <span>{plan.dataAmount}</span>
                                            <b>{formatNigerianNaira(parseFloat(plan.price))}</b>
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