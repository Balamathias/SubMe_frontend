'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer"
import clsx, { ClassValue } from 'clsx'
import { useMediaQuery } from '@/hooks/useMediaQuery'

interface DynamicModalProps {
    children: React.ReactNode,
    trigger: React.ReactNode,
    open?: boolean,
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>,
    showCloseButton?: boolean,
    dialogClassName?: ClassValue,
    drawerClassName?: ClassValue,
}
const DynamicModal = ({children, trigger, open, setOpen, dialogClassName, drawerClassName, showCloseButton}: DynamicModalProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
        <DialogContent className={clsx("sm:max-w-[425px] rounded-xl border-none drop-shadow-md shadow-md", dialogClassName)}>
          <div className="flex flex-col gap-3 p-2.5">
            {children}
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        { trigger }
      </DrawerTrigger>
      <DrawerContent className={clsx('flex flex-col flex-1 gap-3 border-none focus:border-none p-4', drawerClassName)}>
        <div className="flex flex-col gap-3">
            {children}
        </div>
        {showCloseButton && <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="destructive">Close</Button>
          </DrawerClose>
        </DrawerFooter>}
      </DrawerContent>
    </Drawer>
  )
}

export default DynamicModal