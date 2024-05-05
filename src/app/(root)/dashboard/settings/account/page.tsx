import WidthWrapper from '@/components/WidthWrapper'
import { BreadcrumbComponent } from '@/components/dashboard/BreadCrumbComponent'
import React from 'react'

const AccountSettingsPage = () => {
  return (
    <WidthWrapper>
        <BreadcrumbComponent items={[
            { title: 'Dashboard', href: '/dashboard' },
            { title: 'Settings', href: '/dashboard/settings' },
            { title: 'Account' },
        ]} />
    </WidthWrapper>
  )
}

export default AccountSettingsPage