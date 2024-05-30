import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { LucideGlobe2 } from 'lucide-react'
import { Button } from '../ui/button'


const services = [
    {
        imgURL: '/glass/icons/Viber.png',
        title: 'Airtime',
        desc: 'Buy directly from the Top four most popular services in Nigeria - GLO, MTN, AIRTEL and 9MOBILE.'
    },
    {
        imgURL: '/glass/icons/Messenger.png',
        title: 'Data',
        desc: 'Buy directly from the Top four most popular services in Nigeria - GLO, MTN, AIRTEL and 9MOBILE. Enjoy long lasting bonanza data plans'
    },
    {
        imgURL: '/glass/icons/Line.png',
        title: 'Epins',
        desc: 'Get endless and limitless E-pins at affordable Prices for all SIMS.'
    },
    {
        imgURL: '/glass/icons/Telegram.png',
        title: 'Gifting',
        desc: 'Buy data and Airtime for friends and loved ones instantaneously.'
    },
]

const OurServices = () => {
  return (
    <section className='w-full h-[calc(100vh-5rem)] flex items-center bg-slate-800/[0.2] py-8'>
        <div className="flex gap-3 w-full max-md:flex-col p-4 lg:p-8 justify-between mx-auto bg-cover max-w-7xl rounded-2xl flex-col space-y-4">
            <div className="flex-1 flex items-center justify-center space-x-2 w-full">
                <LucideGlobe2 size={28} className='text-violet-500' />
                <h2 className="text-2xl max-sm:text-xl bg-gradient-to-r from-violet-600 via-purple-700 to-violet-800 text-transparent text-clip bg-clip-text font-semibold">Our Services</h2>
            </div>
            <div className="flex items-center gap-4 flex-wrap py-8">
                {
                    services.map(service => (
                        <Card key={service.title} className='drop-shadow-md shadow-md p-4 border-none flex flex-col space-y-1 rounded-2xl sm:max-w-[350px] max-sm:w-full hover:opacity-80 hover:transition-all hover:animate-in hover:duration-150 cursor-pointer bg-slate-950/[0.8] h-[220px] flex-1 justify-between'>
                            <h2 className="text-xl my-1 font-semibold">{service.title}</h2>
                            <p className="text-md my-1.5 text-muted-foreground">{service.desc}</p>

                            <div className='flex flex-col items-center justify-center my-2'>
                                <Button variant='default' className='w-full rounded-full'>Learn more</Button>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default OurServices