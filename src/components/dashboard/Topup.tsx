import React from 'react'
import { Card } from '../ui/card'
import { networks } from '@/utils/networks'
import NetworkItem from './NetworkItem'

const Topup = ({type}: {type: 'airtime' | 'data'}) => {
  return (
    <Card className='shadow-none border-none rounded-none flex space-y-2.5 flex-col'>
        <h2 className="topup-data text-xl py-2 font-semibold text-primary">
            {type === 'data' ? 'Buy Data' : 'Airtime Topup'}
        </h2>

        <div className="flex items-center gap-5 flex-wrap">
            {
                networks.map(network => (
                    <NetworkItem network={network} key={network.name} type={type}/>
                ))
            }
        </div>

    </Card>
  )
}

export default Topup