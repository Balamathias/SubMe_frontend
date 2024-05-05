import WidthWrapper from '@/components/WidthWrapper'
import OnboardingComponent from '@/components/onboarding'
import { getUser } from '@/lib/supabase/accounts'
import { getCurrentUser } from '@/lib/supabase/user.actions'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import React from 'react'

export const metadata: Metadata = {
    title: 'Onboarding',
    description: "Finish Setting up your account",
}
const OnBoardingPage = async () => {
    const { data: {user} } = await getCurrentUser()

    if (!user?.id) return redirect('/sign-in')

    const { data: accountData } = await getUser()

    if (accountData?.onboarded) return redirect('/dashboard')

    if (!user || !user?.id) return redirect('/sign-in')
        
  return (
    <WidthWrapper className="items-center justify-center">
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 py-1.5">
                <h1 className="text-xl font-semibold text-primary">Onboarding</h1>
                <p className="text-sm tracking-tighter text-muted-foreground">Finish setting up your account</p>
            </div>
            <OnboardingComponent currentUser={user} />
        </div>
    </WidthWrapper>
  )
}

export default OnBoardingPage