import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Tables } from '@/database.types'

const WelcomeBox = ({ user, type = 'basic' }: { user: Tables<'users'>, type?: 'basic' | 'complex'}) => {
  return (
    <Card className="border-none shadow-none p-4 lg:p-6 bg-gradient-to-t from-violet-200 to-violet-100 flex justify-between gap-4 items-center dark:from-violet-800 dark:to-violet-900 w-full">
        <div className="flex flex-col gap-2 flex-1">
            <h2 className="text-xl py-1 leading-relaxed font-bold">
                Hi <span className="text-brand dark:text-white tracking-tighter">{user?.username || user?.email}</span>, <br />Welcome back!
            </h2>
            {/** TODO: Check email verification status and warn. */}
            <p className="text-sm tracking-tighter">Your account has been verified successfully. Start transacting.</p>

            <Button className='w-full bg-lime-600 mt-2 font-semibold'>Fund Wallet</Button>
        </div>
        <div className="flex-1 hidden md:flex">
            <Image 
                src='/svg/awesome.svg' 
                width={300} 
                height={300} 
                quality={100} 
                className={'w-full rounded-lg max-h-[250px] text-violet-400 object-cover'}
                alt='Welcome' 
            />
        </div>
    </Card>
  )
}

export default WelcomeBox