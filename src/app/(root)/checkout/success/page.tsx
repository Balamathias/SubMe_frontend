import WidthWrapper from '@/components/WidthWrapper'
import { LucideCheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const PaymentSuccessPage = ({searchParams}: {searchParams: {[key: string]: string}}) => {
    const urlParams = new URLSearchParams(searchParams)
    const transactionId = urlParams.get('transactionId')
    const amount = urlParams.get('amount')
  return (
    <WidthWrapper className="justify-between min-h-screen">
        <div className='flex flex-col gap-4 h-full min-h-screen items-center justify-center'>
            <div className='text-center p-6 lg:px-10 rounded-xl flex flex-col gap-3 items-center justify-center'>
                <LucideCheckCircle2 size={32} className='text-green-500 w-20 h-20 mx-auto' />
                <h1 className='text-2xl text-fuchsia-500 py-2'>Payment Successful!</h1>
                <p className="text-base py-2 text-muted-foreground leading-6">
                    Congratulations! Your payment of <b className='font-semibold'>₦{amount}</b> was successful. Your transaction ID is <b className='font-semibold'>{transactionId}</b>.
                </p>
            </div>
        </div>
    </WidthWrapper>
  )
}

export default PaymentSuccessPage