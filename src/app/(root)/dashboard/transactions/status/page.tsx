import WidthWrapper from '@/components/WidthWrapper'
import { BreadcrumbComponent } from '@/components/dashboard/BreadCrumbComponent'
import React from 'react'

const TransactionStatusPage = () => {
  return (
    <WidthWrapper>
        <BreadcrumbComponent 
            items={[
                {title: 'Dashboard', href: '/dashboard'},
                {title: 'Transactions', href: '/dashboard/transactions'},
                {title: 'Status' },
            ]}
        />
    </WidthWrapper>
  )
}

export default TransactionStatusPage