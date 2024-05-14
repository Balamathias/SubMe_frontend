import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'


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
    <section className="flex gap-3 w-full max-md:flex-col p-4 lg:p-8 justify-between mx-auto items-stretch mt-20 bg-[url('/patterns/recursive.jpg')] bg-cover max-w-7xl rounded-2xl flex-col space-y-4">
        <div className="flex-1 flex items-center gap-3 space-y-3 w-full p-4">
            <Image
                src={'/glass/images/search-globe.png'}
                alt='Airtime'
                width={100}
                height={100}
                quality={100}
                className='h-16 w-16 object-cover'
            />
            <h2 className="text-4xl py-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200 via-amber-500 to-orange-400 text-transparent text-clip bg-clip-text font-semibold">Our Services</h2>
        </div>
        <div className="flex items-center gap-4 flex-wrap py-8">
            {
                services.map(service => (
                    <Card key={service.title} className='drop-shadow-md shadow-md p-4 border-none flex flex-col space-y-1 justify-center items-center rounded-xl sm:max-w-[350px] max-sm:w-full hover:opacity-50 hover:transition-all hover:animate-in hover:duration-150 cursor-pointer'>
                        <Image
                            src={service.imgURL}
                            alt='Airtime'
                            width={100}
                            height={100}
                            quality={100}
                            className='h-20 w-20 object-cover'
                        />
                        <h2 className="text-xl py-1 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-200 via-green-500 to-amber-400 text-transparent text-clip bg-clip-text font-semibold">{service.title}</h2>
                        <p className="text-sm py-1 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-400 via-amber-500 to-amber-400 text-transparent text-clip bg-clip-text tracking-tighter text-center">{service.desc}</p>
                    </Card>
                ))
            }
        </div>
    </section>
  )
}

export default OurServices