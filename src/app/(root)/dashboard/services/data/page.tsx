import WidthWrapper from '@/components/WidthWrapper'
import { BreadcrumbComponent } from '@/components/dashboard/BreadCrumbComponent'
import React from 'react'

const DataServicesPage = () => {
  return (
    <WidthWrapper>
        <BreadcrumbComponent 
            items={[
                {title: 'Dashboard', href: '/dashboard'},
                {title: 'Services', href: '/dashboard/services'},
                {title: 'Data' },
            ]}
        />
    </WidthWrapper>
  )
}

export default DataServicesPage