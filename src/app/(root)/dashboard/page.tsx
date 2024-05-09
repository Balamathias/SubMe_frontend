import WidthWrapper from '@/components/WidthWrapper'
import Analytics, { AnalyticsSkeleton } from '@/components/dashboard/Analytics'
import RightSidebar from '@/components/dashboard/RightSidebar'
import Topup from '@/components/dashboard/Topup'
import TopupData from '@/components/dashboard/Topup'
import WelcomeBox from '@/components/dashboard/WelcomeBox'
import { getUser } from '@/lib/supabase/accounts'
import { getCurrentUser } from '@/lib/supabase/user.actions'
import { getWallet } from '@/lib/supabase/wallets'
import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'

const DashboardPage = async () => {
  const [
    { data: { user } }, 
    { data: accountUser },
  ] = await Promise.all([getCurrentUser(), getUser(), getWallet()])
  if (!user?.id) return redirect('/sign-in')

  return (
    <div className="flex items-start w-full">
      <WidthWrapper className="py-2 lg:py-4">
        <div className="flex flex-col gap-3 overflow-auto custom-scrollbar h-screen mt-3 pb-12">
          <div className="flex items-center gap-4 flex-wrap">
            <WelcomeBox user={accountUser!} />
          </div>
          <Suspense fallback={<AnalyticsSkeleton />}>
            <Analytics />
          </Suspense>
          <Suspense fallback={<AnalyticsSkeleton />}>
            <Topup type='data' key='data' />
          </Suspense>
          <Suspense fallback={<AnalyticsSkeleton />}>
            <Topup type='airtime' key={'airtime'} />
          </Suspense>
        </div>
      </WidthWrapper>
      <RightSidebar user={accountUser!} />
    </div>
  )
}

export default DashboardPage