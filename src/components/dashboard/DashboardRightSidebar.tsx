import { Tables } from '@/database.types'
import { getHistory } from '@/lib/supabase/history'
import Image from 'next/image'
import React from 'react'

const DashboardRightSidebar = async ({user}: { user: Tables<'users'> | null}) => {
  const { data: history } = await getHistory()
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

        <aside className="flex flex-col gap-2">
            {history?.map((item, index) => (
                <div key={index} className="flex gap-2 items-center p-2 hover:bg-secondary hover:transiti border-b cursor-pointer">
                    <div className='flex flex-col gap-2'>
                        <p className="font-semibold capitalize">{item.type}</p>
                        <p className="text-xs">{item.description}</p>
                    </div>
                </div>
            ))}
    </aside>
    </div>
  )
}

export default DashboardRightSidebar