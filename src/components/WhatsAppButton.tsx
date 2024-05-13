'use client'

import { useTheme } from 'next-themes'
import React from 'react'

import { FloatingWhatsApp } from 'react-floating-whatsapp'

const WhatsAppButton = () => {
    const { resolvedTheme } = useTheme()
  return (
    <>
        <FloatingWhatsApp 
            accountName='SubMe'
            phoneNumber='+2349154029724'
            avatar='/glass/images/user.png'
            chatMessage='How may we help you today?'
            darkMode={resolvedTheme === 'dark'}
            allowClickAway
            allowEsc
            buttonClassName='bg-primary'
            buttonStyle={{backgroundColor: 'dodgerblue'}}
            chatboxClassName=''
            chatboxStyle={{backgroundColor: 'dodgerblue'}}
            className=''
            placeholder='Type a message...'
        />
    </>
  )
}

export default WhatsAppButton