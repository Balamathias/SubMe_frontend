'use client'

import { SubLinkProps } from '@/utils/sidebarLinks'
import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const SubLinkItem = ({subLink}: { subLink: SubLinkProps }) => {
    const router = useRouter()
    const pathname = usePathname()
    const isActive = pathname === subLink.href
  return (
    <div 
        className={clsx('text-sm mt-1 text-muted-foreground hover:text-primary cursor-pointer', {
            'text-primary': isActive
        })} 
        role='link'
        onClick={() => router.push(subLink.href)}
    >
        {subLink.title}
    </div>
  )
}

export default SubLinkItem