import WidthWrapper from '@/components/WidthWrapper'
import { BreadcrumbComponent } from '@/components/dashboard/BreadCrumbComponent'
import React from 'react'

const FaqsPage = () => {
  return (
    <WidthWrapper>
        <BreadcrumbComponent 
            items={[
                {title: 'Dashboard', href: '/dashboard'},
                {title: 'Help', href: '/dashboard/help'},
                {title: 'FAQs' },
            ]}
        />
    </WidthWrapper>
  )
}

export default FaqsPage