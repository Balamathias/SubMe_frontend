import WidthWrapper from '@/components/WidthWrapper'
import { BreadcrumbComponent } from '@/components/dashboard/BreadCrumbComponent'
import React from 'react'

const AppearanceSettingsPage = () => {
  return (
    <WidthWrapper>
        <BreadcrumbComponent 
            items={[
                {title: 'Dashboard', href: '/dashboard'},
                {title: 'Settings', href: '/dashboard/settings'},
                {title: 'Appearance' },
            ]}
        />
    </WidthWrapper>
  )
}

export default AppearanceSettingsPage