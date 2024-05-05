import WidthWrapper from '@/components/WidthWrapper'
import { BreadcrumbComponent } from '@/components/dashboard/BreadCrumbComponent'
import React from 'react'

const AirtimeServicesPage = () => {
  return (
    <WidthWrapper>
        <BreadcrumbComponent 
            items={[
                {title: 'Dashboard', href: '/dashboard'},
                {title: 'Services', href: '/dashboard/services'},
                {title: 'Airtime' },
            ]}
        />
    </WidthWrapper>
  )
}

export default AirtimeServicesPage