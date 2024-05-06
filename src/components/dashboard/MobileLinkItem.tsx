'use client'

import { LinksProps } from '@/utils/sidebarLinks'
import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'
import React, { useMemo } from 'react'

const MobileLinkItem = ({ link }: { link: LinksProps }) => {
    const pathname = usePathname()
    const router = useRouter()

    const isActive = useMemo(() => {
        return pathname === link.href
    }, [pathname, link.href])
    
  return (
    <div className={clsx('flex items-center gap-1.5 max-sm:flex-col p-0.5 rounded-md', {'text-primary font-semibold': isActive})}
        onClick={() => router.push(link.href)}
    >
        <link.icon size={25} className={clsx('text-muted-foreground',{'text-primary font-bold': isActive})} />
        <span className={clsx("text-sm max-xs:text-xs max-xs:tracking-tight max-sm:tracking-tighter text-muted-foreground truncate", {'text-primary font-semibold': isActive})}>{link.title}</span>
    </div>
  )
}

export default MobileLinkItem