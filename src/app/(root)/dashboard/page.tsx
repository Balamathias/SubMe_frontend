import WidthWrapper from '@/components/WidthWrapper'
import RightSidebar from '@/components/dashboard/RightSidebar'
import WelcomeBox from '@/components/dashboard/WelcomeBox'
import { getCurrentUser } from '@/lib/supabase/user.actions'
import { redirect } from 'next/navigation'
import React from 'react'

const DahboardPage = async () => {
  const {data: { user }} = await getCurrentUser()

  if (!user?.id) return redirect('/sign-in')

  return (
    <div className="flex items-start w-full">
      <WidthWrapper>
        <div className="flex items-center gap-4 flex-wrap">
          <WelcomeBox user={{name: user?.email || ''}} />
        </div>
      </WidthWrapper>
      <RightSidebar user={{} as any} />
    </div>
  )
}

export default DahboardPage