import React from 'react'
import { Card } from '../ui/card'
import { networks } from '@/utils/networks'
import NetworkItem from './NetworkItem'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const Topup = ({type}: {type: 'airtime' | 'data'}) => {
  return (
    <Card className='shadow-none border-none rounded-none flex space-y-2.5 flex-col'>
        <h2 className="topup-data text-xl py-2 font-semibold text-primary">
            {type === 'data' ? 'Buy Data' : 'Airtime Topup'}
        </h2>

        <ScrollArea className="w-96 md:min-w-min whitespace-nowrap rounded-md !flex !flex-row gap-3">
            <div className="flex w-max space-x-4 p-4">
                {
                    networks.map(network => (
                        <div key={network.name}>
                            <NetworkItem network={network} type={type}/>
                        </div>
                    ))
                }
                <ScrollBar orientation="horizontal" />
            </div>
        </ScrollArea>

    </Card>
  )
}

export default Topup