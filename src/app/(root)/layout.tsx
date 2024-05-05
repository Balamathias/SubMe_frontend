import { getUser } from '@/lib/supabase/accounts'
import { getCurrentUser } from '@/lib/supabase/user.actions'
import { UserProvider } from '@/providers/user-provider'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const {data} = await getCurrentUser()
  const { data: accountData } = await getUser()

  if (!accountData?.onboarded) return redirect('/onboarding')
    
  return (
    <UserProvider user={data?.user} accountUser={accountData}>
        {children}
    </UserProvider>
  )
}

export default RootLayout