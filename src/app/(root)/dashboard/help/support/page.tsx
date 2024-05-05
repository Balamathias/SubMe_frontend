import WidthWrapper from '@/components/WidthWrapper'
import { BreadcrumbComponent } from '@/components/dashboard/BreadCrumbComponent'
import React from 'react'

const SupportPage = () => {
  return (
    <WidthWrapper>
        <BreadcrumbComponent 
            items={[
                {title: 'Dashboard', href: '/dashboard'},
                {title: 'Help', href: '/dashboard/help'},
                {title: 'Support' },
            ]}
        />
    </WidthWrapper>
  )
}

export default SupportPage