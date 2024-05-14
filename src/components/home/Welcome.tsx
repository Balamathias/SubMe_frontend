import { getUser } from '@/lib/supabase/accounts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Welcome = async () => {
    const { data: user } = await getUser()
  return (
    <section className="flex gap-3 w-full max-md:flex-col-reverse p-4 lg:p-8 justify-between  max-w-7xl mx-auto items-stretch mt-20 pb-16 md:pb-60">
        <div className="flex-1 flex flex-col space-y-6 h-full">
          <h2 className="text-5xl font-semibold py-3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400 via-amber-700 to-amber-500 text-transparent text-clip bg-clip-text">
            Welcome to SubMe,
          </h2>
          <h2 className="text-2xl text-muted-foreground">
            Your ultimate data and Airtime plug.
          </h2>
          <p className="py-3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-200 via-amber-500 to-orange-400 text-transparent text-clip bg-clip-text">Welcome to SubMe, where your digital needs are met with unparalleled ease. Dive into a world of instant airtime recharge, swift data purchases, and seamless ePin transactions, all at competitive rates. Experience the convenience of a service {"that’s"} as fast as it is reliable—because your time and connectivity matter.</p>

          <div className="flex gap-3 flex-row items-center max-sm:flex-col w-full">
            {
              !user ? (
                <>
                  <Link 
                    className="p-4 text-center flex items-center justify-center rounded-xl text-clip bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-600 via-amber-600 to-fuchsia-900 mt-3 font-semibold hover:opacity-50 hover:transition-all w-full"
                    href={'/sign-up'}>Get Started with Email</Link>
                  <Link 
                    className="p-4 text-center flex items-center justify-center border-gray-500 rounded-xl border-2 bg-clip-text text-transparent text-clip bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-600 via-amber-600 to-fuchsia-900 mt-3 font-semibold hover:opacity-50 hover:transition-all w-full"
                    href={'/sign-in'}>Continue with Google</Link>
                </>
              ): (

                <Link 
                className="p-4 text-center flex items-center justify-center border-gray-500 rounded-xl border-2 bg-clip-text text-transparent text-clip bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-600 via-amber-600 to-fuchsia-900 mt-3 font-semibold hover:opacity-50 hover:transition-all w-full"
                href={'/dashboard'}>Go to Dashboard</Link>
              )
            }
          </div>

        </div>
        <div className="flex-1">
          <Image 
            src={'/bg/dashboard.png'}
            alt="Background"
            width={1000}
            height={1000}
            className="object-cover w-full flex-1 h-full rounded-lg"
          />
        </div>
      </section>
  )
}

export default Welcome