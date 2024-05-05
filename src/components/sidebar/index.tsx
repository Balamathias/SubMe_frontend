'use client'

import { sidebarLinks } from '@/utils/sidebarLinks'
import React from 'react'
import LinkItem from './LinkItem'
import Image from 'next/image'
import Avatar from '../Avatar'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { useCurrentUser } from '@/providers/user-provider'
import { signOut } from '@/lib/supabase/user.actions'

const SidebarComponent = () => {
    const user = useCurrentUser()
  return (
    <div className='h-screen md:flex flex-col p-2 lg:p-2.5 hidden w-[270px] lg:w-[300px] overflow-auto custom-scrollbar justify-between border-r-2 border-dashed'>
        <div className="flex flex-col space-y-12">
            <div className="flex gap-1.5 p-2 items-center">
                <Image 
                    src='/vitals/logo-192.png' 
                    width={30} 
                    height={30} 
                    alt='Subme Logo' 
                    quality={100}
                />
                <h2 className='text-primary font-semibold text-xl'>Subme</h2>
            </div>

            <nav className='flex flex-col gap-1.5 '>
                {
                    sidebarLinks.map((link, index) => (
                        <LinkItem key={index} link={link} />
                    ))
                }
            </nav>
        </div>

        <footer className="p-2 lg:p-2.5 flex gap-3 flex-col">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1 5">
                    <Avatar name={user?.currentAccountUser?.first_name || ''} />
                    <div className="flex flex-col gap-0.5">
                        <h3 className='text-primary text-sm py-0 font-semibold truncate'>{user?.currentAccountUser?.username || ''}</h3>
                        <p className='text-muted-foreground text-xs truncate'>{user?.currentAccountUser?.email}</p>
                    </div>
                </div>
                <Button onClick={ async () => await signOut()} size='sm' variant='destructive' className='flex items-center gap-1.5 border-none shadow-none'>
                    Logout <ArrowRight size={16} className='text-rose-50'/>
                </Button>
            </div>
        </footer>
    </div>
  )
}

export default SidebarComponent