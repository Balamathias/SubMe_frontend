import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { BarChart, Kanban, MenuIcon } from 'lucide-react'
import Image from 'next/image'
import DynamicSheet from '../DynamicSheet'
import RightSidebar from './RightSidebar'
import { getUser } from '@/lib/supabase/accounts'

const TopNavbar = async () => {
  const { data: accountUser } = await getUser()
  return (
    <div className='flex  top-0 z-20 h-14 justify-between items-center w-full max-sm:!p-3 md:px-5 backdrop-blur bg-transparent'>
        <div className='hidden md:block'/>
        <Link href='/' className='flex gap-1 items-center md:hidden'>
            <Image
            src='/vitals/logo-192.png'
            alt='Logo'
            width={40}
            height={40}
            quality={100}
            className="h-8 w-8 md:ml-4 object-contain"
            />
            <p className="text-primary font-semibold md:hidden">SubMe</p>
        </Link>

        <div className="flex flex-col items-center justify-end ml-auto">
            <DynamicSheet
              trigger={
                <Button size={'icon'} variant={'secondary'} className="mt-2">
                  <Kanban size={26} strokeWidth={1.5} className='text-muted-foreground mr-2 rotate-90' />
                </Button>
              }
            >
              <RightSidebar user={accountUser!} className="!flex !overflow-auto !border-none"/>
            </DynamicSheet>
        </div>
    </div>
  )
}

export default TopNavbar