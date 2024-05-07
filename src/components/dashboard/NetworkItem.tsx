'use client'

import { networks } from '@/utils/networks'
import React from 'react'
import { Card } from '../ui/card'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const NetworkItem = ({ network, type }: { network: typeof networks[0], type: 'airtime' | 'data' }) => {
    const router = useRouter()
    return (
        <Card className={clsx('border-none shadow-md drop-shadow-md rounded-r-2xl bg-secondary flex flex-col items-center justify-center space-y-2.5 p-2 cursor-pointer focus:opacity-70 focus:transition-all', {
                [`${network.activeClassName}`]: type === 'airtime'
        })}
            onClick={() => router.push(`/dashboard/services/${type}?network=${network.value}`)}
        >
            <Image
                src={network.imgURL}
                alt={network.name}
                width={80}
                height={80}
                quality={100}
                className="object-cover rounded-md"
            />
            <p className='text-md font-semibold tracking-tighter'>{network.name}</p>
        </Card>
    )
}

export default NetworkItem