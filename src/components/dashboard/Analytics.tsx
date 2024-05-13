import { getWallet } from '@/lib/supabase/wallets'
import React from 'react'
import { Card } from '../ui/card'
import { Skeleton } from '../ui/skeleton'
import { formatNigerianNaira } from '@/utils/formatCurrency'

const Analytics = async () => {
    const { data: wallet } = await getWallet()
  return (
    <div className="flex flex-wrap gap-4 items-center py-5">
        <Card className='p-5 shadow-md drop-shadow-md border-none rounded-lg bg-gradient-to-b from-background to-secondary w-60 max-lg:w-full'>
            <h3 className='text-lg font-semibold mb-1.5'>Total Balance</h3>
            <h1 className="text-4xl py-1.5">{formatNigerianNaira(parseFloat(wallet?.balance?.toString()!) || 0)}</h1>
        </Card>

        <Card className='p-5 shadow-md drop-shadow-md border-none rounded-lg bg-gradient-to-t from-background to-secondary w-60 max-lg:w-full'>
            <h3 className='text-lg font-semibold mb-1.5'>Today{"'"}s data Plan</h3>
            <h1 className="text-4xl py-1.5">0.00 GB</h1>
        </Card>
    </div>
  )
}

export const AnalyticsSkeleton = () => {
    return (<div className="flex flex-wrap gap-4 items-center py-5">
        <Skeleton className='p-4 rounded-lg w-60 flex flex-col gap-3 max-lg:w-full'>
            <Skeleton className="w-1/2 h-6 rounded-md" />
            <Skeleton className="w-1/2 h-10 rounded-md" />
        </Skeleton>
        <Skeleton className='p-4 rounded-lg w-60 flex flex-col gap-3 max-lg:w-full'>
            <Skeleton className="w-1/2 h-6 rounded-md" />
            <Skeleton className="w-1/2 h-10 rounded-md" />
        </Skeleton>
    </div>)
}

export default Analytics