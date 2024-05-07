'use client'

import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import clsx, { ClassValue } from 'clsx'

interface DynamicSheetProps {
    trigger: React.ReactNode,
    children: React.ReactNode,
    open?: boolean,
    className?: ClassValue,
    onClose?: () => void,
    setOpen?: (open: boolean) => void,
}
  
const DynamicSheet = ({trigger, children, className}: DynamicSheetProps) => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            {trigger}
        </SheetTrigger>
        <SheetContent className={clsx('flex flex-col gap-3 overflow-hidden border-none rounded-md drop-shadow-md shadow-md p-3 py-5', className)}>
           {children}
        </SheetContent>
    </Sheet>
  )
}

export default DynamicSheet