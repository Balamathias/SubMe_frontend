import { getUser } from '@/lib/supabase/accounts'
import { LucideMail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Welcome = async () => {
    const { data: user } = await getUser()
  return (
    <section className='w-full h-[calc(100vh-5rem)] flex items-center justify-center bg-[url("/people/look-at-that.png")] bg-cover bg-no-repeat relative'>
      <div className='bg-slate-950/[0.95] w-full h-full z-10 absolute to-0 right-0 left-0' />
      <div className="flex gap-3 w-full max-md:flex-col-reverse z-20 p-4 justify-between  max-w-7xl mx-auto items-center space-x-6 max-sm:space-y-4">
        <div className="flex-1 flex flex-col space-y-6 h-full md:w-1/2">
          <h2 className="text-5xl max-md:text-3xl max-sm:text-2xl font-semibold py-3 text-white">
            Welcome to SubMe,
          </h2>
          <h2 className="text-xl text-slate-100">
            Your ultimate data and Airtime plug.
          </h2>
          <p className="py-3 text-slate-200/[0.9] text-sm max-sm:text-xs">Welcome to SubMe, where your digital needs are met with unparalleled ease. Dive into a world of instant airtime recharge, swift data purchases, and seamless ePin transactions, all at competitive rates. Experience the convenience of a service {"that’s"} as fast as it is reliable—because your time and connectivity matter.</p>

          <div className="flex gap-3 flex-row items-center max-sm:flex-col w-full">
            {
              !user ? (
                <>
                  <Link 
                    className="p-4 sm:p-2 px-4 text-center flex items-center justify-center rounded-full bg-gradient bg-gradient-to-l from-violet-500 via-purple-600 to-amber-600 font-semibold hover:opacity-50 hover:transition-all w-full"
                    href={'/sign-up'}><LucideMail className='mr-1' color='white' size={20} /> Get Started with Email</Link>
                  <Link 
                    className="p-4 sm:p-2 px-4 text-center flex items-center justify-center rounded-full bg-gradient bg-gradient-to-l from-violet-500 via-purple-600 to-amber-600 font-semibold hover:opacity-50 hover:transition-all w-full"
                    href={'/sign-in'}>Continue with Google</Link>
                </>
              ): (

                <Link 
                className="p-4 sm:p-2 px-4 text-center flex items-center justify-center rounded-full bg-gradient bg-gradient-to-l from-violet-500 via-purple-600 to-amber-600 font-semibold hover:opacity-50 hover:transition-all w-full"
                href={'/dashboard'}>Go to Dashboard</Link>
              )
            }
          </div>

        </div>
        <div className="flex-1 md:w-1/2">
          <Image 
            src={'/people/you-see-ba.png'}
            alt="Background"
            width={1000}
            height={1000}
            className="object-cover w-full h-full float-right"
          />
        </div>
      </div>
    </section>
  )
}

export default Welcome