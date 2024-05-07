'use client'

import { LinksProps, mobileLinks } from '@/utils/sidebarLinks'
import clsx from 'clsx'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { useMemo } from 'react'

const MobileLinkItem = ({ link }: { link: typeof mobileLinks[0] }) => {
    const pathname = usePathname()
    const router = useRouter()

    const isActive = useMemo(() => {
        return pathname === link.href
    }, [pathname, link.href])
    
  return (
    <div className={clsx('flex items-center gap-1.5 max-sm:flex-col p-0.5 rounded-md', {'text-primary font-semibold': isActive})}
        onClick={() => router.push(link.href)}
    >
    <link.icon size={25} strokeWidth={1} className={clsx('text-muted-foreground',{'text-primary font-bold': isActive})} />
    <span className={clsx("text-sm max-xs:text-xs max-xs:tracking-tight max-sm:tracking-tighter text-muted-foreground truncate", {'text-primary font-semibold': isActive})}>{link.title}</span>
    </div>
  )
}

export default MobileLinkItem

    // <Image 
    //   src={link.imgURL}
    //   alt={link.title}
    //   width={25}
    //   height={25}
    //   quality={100}
    //   className="h-5 w-5 object-contain"
    //   />