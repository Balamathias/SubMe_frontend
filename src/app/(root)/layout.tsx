import { getUser } from '@/lib/supabase/accounts'
import { getCurrentUser } from '@/lib/supabase/user.actions'
import { UserProvider } from '@/providers/user-provider'
import React, { ReactNode } from 'react'

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const [{data}, { data: accountData }] = await Promise.all([getCurrentUser(), getUser()])
  return (
    <UserProvider user={data?.user} accountUser={accountData}>
        {children}
    </UserProvider>
  )
}

export default RootLayout