'use client'

import { Tables } from '@/database.types'
import { DataSchema } from '@/utils/schema/dataSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Form } from '../ui/form'
import { Card } from '../ui/card'
import DataInputField from './DataInputField'
import { Button } from '../ui/button'
import { useSearchParams, useRouter } from 'next/navigation'
import { networks } from '@/utils/networks'
import Image from 'next/image'
import { sendData } from '@/lib/n3tdata'
import {nanoid} from 'nanoid'
import { getNetworkValue } from '@/utils/getNetworkValue'

const BuyData = ({network: _network, user}: {network?: string, user: Tables<'users'>}) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const network = searchParams.get('network')

    const networkObj = networks.find(n => n.value === network)

    const [isPending, setIsPending] = React.useState(false)
    const form = useForm<z.infer<typeof DataSchema>>({
        resolver: zodResolver(DataSchema),
        defaultValues: {
          mobileNumber: user?.phone || '',
        },
      })
  
      async function onSubmit(values: z.infer<typeof DataSchema>) {
        setIsPending(true)
        try {
            const {} = await sendData({
                "request-id": nanoid(16),
                bypass: false,
                network: parseInt(getNetworkValue(network as any)),
                phone: values.mobileNumber,
                data_plan: values.planType! as any
            })
            return
        }
        catch (error: any) {
            console.error(error)
            setIsPending(false)
            return toast.error('Error!', { description: error?.message })
        }
        finally { setIsPending(false) }
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

        <Form {...form}>
            <Card className='flex flex-col gap-2 shadow-none border-none w-full max-w-[450px]'>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 flex flex-1 flex-col">

                <DataInputField name="mobileNumber" label="Phone Number" defaultValue={user?.phone!} placeholder={user?.phone!} control={form.control} />

                <Button type="submit" disabled={isPending} className='mt-2 w-full'>{isPending ? 'Processing...' : 'Buy'}</Button>
            </form>
            </Card>
        </Form>

    </div>
  )
}

export default BuyData