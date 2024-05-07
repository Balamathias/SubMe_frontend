import React from 'react'
import { Button } from '../ui/button'
import { CopyIcon, LinkIcon, Share2Icon } from 'lucide-react'
import DynamicModal from '../DynamicModal'
import Image from 'next/image'

const ShareInvite = () => {
    const bonusAmt = 200
    const inviteCode = 'XCV334ErTy'
  return (
    <DynamicModal
        trigger={
            <Button className='bg-gradient from-yellow-400 to bg-yellow-600 text-white flex items-center'>
                <Share2Icon size={15} className='mr-2'/>
                Invite & Earn
            </Button>
        }
    >
        <div className="flex flex-col gap-3 items-center justify-center">
            <Image 
                src="/glass/images/note2.png" 
                width={150} 
                height={150} 
                quality={100}
                alt="Invite Friends" 
                className='object-cover rounded-xl mx-auto h-16 w-16'
            />
            <p className="text-muted-foreground text-sm">Invite your friends and earn N{bonusAmt} once your friend tops up for the first time.</p>
            <div className="flex items-center gap-2 bg-secondary rounded-md w-full h-12 px-2">
                <input 
                    disabled 
                    type="text" 
                    className='flex-1 bg-transparent font-semibold p-2 text-xl focus:outline-none focus-visible:ring-0 focus:ring-0 text-center tracking-wider max-sm:w-[200px]' 
                    value={inviteCode}
                />
                <Button className='rounded-r-md bg-gradient-to-tr from-yellow-400 to-yellow-600 text-white' size={'icon'}>
                    <CopyIcon size={15} />
                </Button>
            </div>
            <Button className='w-full rounded-full bg-pink-700 hover:bg-pink-800 flex items-center gap-2'>
                <LinkIcon size={15} className='mr-2'/>
                Copy Link
            </Button>
        </div>
    </DynamicModal>
  )
}

export default ShareInvite