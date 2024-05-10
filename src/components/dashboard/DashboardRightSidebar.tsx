import { Tables } from '@/database.types'
import Image from 'next/image'
import React from 'react'

const DashboardRightSidebar = ({user}: { user: Tables<'users'> | null}) => {
  return (
    <div className='flex-col gap-3 hidden lg:flex w-[300px] border-l-2 border-dashed p-4 min-h-screen overflow-auto custom-scrollbar'>
        <header className="flex gap-3 items-center">
            <Image
                src={'/glass/images/clock.png'}
                width={40}
                height={40}
                quality={100}
                alt='Clock'
                className='object-cover h-8 w-8'
            />
            <h2 className="font-semibold">Recents</h2>
        </header>
    </div>
  )
}

export default DashboardRightSidebar