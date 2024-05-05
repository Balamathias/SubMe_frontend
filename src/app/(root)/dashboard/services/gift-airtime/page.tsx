import WidthWrapper from '@/components/WidthWrapper'
import { BreadcrumbComponent } from '@/components/dashboard/BreadCrumbComponent'
import React from 'react'

const GiftAirtimeServicesPage = () => {
  return (
    <WidthWrapper>
        <BreadcrumbComponent 
            items={[
                {title: 'Dashboard', href: '/dashboard'},
                {title: 'Services', href: '/dashboard/services'},
                {title: 'Gift Airtime' },
            ]}
        />
    </WidthWrapper>
  )
}

export default GiftAirtimeServicesPage