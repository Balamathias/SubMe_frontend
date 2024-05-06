'use client'

import React from 'react'
import { sidebarLinks as links } from '@/utils/sidebarLinks'
import MobileLinkItem from './MobileLinkItem'

const MobileBottombar = () => {
  return (
    <div className="md:hidden fixed bottom-0 w-full flex flex-1 gap-2 z-20 bg-background shadow-md drop-shadow-md dark:bg-slate-950 dark:border-t-2 border-dashed h-16">
        <nav className="flex justify-between gap-1.5 w-full items-center p-3">
            {
                links.map((link, index) => (
                    <MobileLinkItem key={index} link={link} />
                ))
            }
        </nav>
    </div>
  )
}

export default MobileBottombar