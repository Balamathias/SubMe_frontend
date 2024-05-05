import WidthWrapper from '@/components/WidthWrapper'
import { BreadcrumbComponent } from '@/components/dashboard/BreadCrumbComponent'
import React from 'react'

const GeneralSettingsPage = () => {
  return (
    <WidthWrapper>
        <BreadcrumbComponent 
            items={[
                {title: 'Dashboard', href: '/dashboard'},
                {title: 'Settings', href: '/dashboard/settings'},
                {title: 'General' },
            ]}
        />
    </WidthWrapper>
  )
}

export default GeneralSettingsPage