'use client'

import React from 'react'
import DynamicModal from '@/components/DynamicModal'
import { Button } from '../ui/button'
import { formatNigerianNaira } from '@/utils/formatCurrency'

interface ConfirmPurchaseProps {
    plan: string, 
    phone: string, 
    open: boolean, 
    setOpen: React.Dispatch<React.SetStateAction<boolean>>, 
    handlePurchase: () => void,
    amount: string,
    network: string,
}

const ConfirmPurchase = ({plan, phone, open, setOpen, handlePurchase, amount, network}: ConfirmPurchaseProps) => {
  return (
    <div className='flex flex-col gap-3'>
        <DynamicModal
            open={open}
            setOpen={setOpen}
        >
            <div className='flex flex-col gap-3'>
                <h2 className='text-xl font-semibold py-2'>Confirm Details</h2>
                <p>Phone Number: {phone}</p>
                <p>Plan: {plan}</p>
                <p>Amount: {formatNigerianNaira(parseFloat(amount))}</p>
                <p>Network: {network}</p>
            </div>
            <Button className='bg-pink-600 w-full' onClick={ async () => {
                setOpen(false)
                return await handlePurchase()
            }}>Proceed</Button>
        </DynamicModal>
    </div>
  )
}

export default ConfirmPurchase