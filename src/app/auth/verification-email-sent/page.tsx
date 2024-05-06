import WidthWrapper from '@/components/WidthWrapper'
import Image from 'next/image'
import React from 'react'

const VerificationEmailSentPage = async () => {
  return (
    <WidthWrapper className="h-screen overflow-hidden">
        <div className='flex flex-col gap-4 h-full min-h-screen items-center justify-center overflow-auto'>
            <div className="">
              <Image 
                src={'/glass/images/mail-book.png'}
                alt={'mail'}
                width={500}
                height={500}
                className='object-cover w-full h-full'
              />
            </div>
            <div className='text-center p-6 lg:px-10 rounded-xl flex flex-col gap-3 items-center justify-center'>
                <h1 className='text-2xl text-primary py-2'>Verification Email Sent</h1>
                <p className="text-base py-2 text-muted-foreground leading-6">
                    We have sent you a verification email, Please check your email to verify your account.
                </p>
            </div>
        </div>
    </WidthWrapper>
  )
}

export default VerificationEmailSentPage