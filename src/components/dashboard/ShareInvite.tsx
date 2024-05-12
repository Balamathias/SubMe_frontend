'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { CopyIcon, LinkIcon, Share2Icon, Check } from 'lucide-react'
import DynamicModal from '../DynamicModal'
import Image from 'next/image'
import { Tables } from '@/database.types'
import { toast } from 'sonner'

const ShareInvite = ({ user }: { user: Tables<'users'> }) => {
    const bonusAmt = 200
    const inviteCode = user?.unique_code
    const inviteLink = `${process.env.NEXT_PUBLIC_URL!}/invite?code${inviteCode}`
    const [copied, setCopied] = useState(false)

    const copyToClipboard = (text: string) => {
        try{
            navigator.clipboard.writeText(text)
            setCopied(true)
            toast.success('Copied to clipboard')
            setTimeout(() => {
                setCopied(false)
            }, 2000)
        } catch(err) {
            toast.error('Failed to copy to clipboard')
        }
    }

    return (
        <DynamicModal
            trigger={
                <Button className='bg-gradient from-yellow-400 to bg-yellow-600 text-white flex items-center'>
                    <Share2Icon size={15} className='mr-2' />
                    Invite & Earn
                </Button>
            }
        >
            <div className='flex flex-col gap-3 items-center justify-center'>
                <Image
                    src='/glass/images/note2.png'
                    width={150}
                    height={150}
                    quality={100}
                    alt='Invite Friends'
                    className='object-cover rounded-xl mx-auto h-16 w-16'
                />
                <p className='text-muted-foreground text-sm'>
                    Invite your friends and earn N{bonusAmt} once your friend tops up for the first time.
                </p>
                <div className='flex items-center gap-2 bg-secondary rounded-md w-full h-12 px-2'>
                    <input
                        disabled
                        type='text'
                        className='flex-1 bg-transparent font-semibold p-2 text-xl focus:outline-none focus-visible:ring-0 focus:ring-0 text-center tracking-wider max-sm:w-[200px]'
                        value={inviteCode || 'No Code'}
                    />
                    <Button
                        className='rounded-r-md bg-gradient-to-tr from-yellow-400 to-yellow-600 text-white'
                        size={'icon'}
                        onClick={() => copyToClipboard(inviteCode || '')}
                    >
                        {
                            copied ? <Check size={15} className="text-green-50"/> : <CopyIcon size={15} />
                        }
                    </Button>
                </div>
                <Button
                    className='w-full rounded-full bg-pink-700 hover:bg-pink-800 flex items-center gap-2'
                    onClick={() => copyToClipboard(inviteLink)}
                >
                    <LinkIcon size={15} className='mr-2' />
                    {copied? 'Copied' : 'Copy Link'}
                </Button>
            </div>
        </DynamicModal>
    )
}

export default ShareInvite
