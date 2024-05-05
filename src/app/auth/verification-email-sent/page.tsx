import WidthWrapper from '@/components/WidthWrapper'
import { LucideCheckCircle } from 'lucide-react'
import React from 'react'

const VerificationEmailSentPage = () => {
  return (
    <WidthWrapper className="">
        <div className='flex flex-col gap-4 h-full min-h-screen items-center justify-center'>
            <div className='text-center p-6 lg:px-10 rounded-xl flex flex-col gap-3 items-center justify-center'>
                <LucideCheckCircle size={32} className='text-green-500 w-20 h-20 mx-auto' />
                <h1 className='text-2xl text-primary py-2'>Verification Email Sent</h1>
                <p className="text-base py-2 text-muted-foreground leading-6">
                    We have sent you an email. Please check your email to verify your account.
                </p>
            </div>
        </div>
    </WidthWrapper>
  )
}

export default VerificationEmailSentPage