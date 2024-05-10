import WidthWrapper from '@/components/WidthWrapper'
import { BreadcrumbComponent } from '@/components/dashboard/BreadCrumbComponent'
import DataComponent from '@/components/dashboard/DataComponent'
import React, { Suspense } from 'react'

const DataServicesPage = ({ searchParams }: { searchParams: {[key: string]: string}}) => {
  const urlParams = new URLSearchParams(searchParams)
  const network = urlParams.get('network')
  return (
    <WidthWrapper>
        <BreadcrumbComponent 
            items={[
                {title: 'Dashboard', href: '/dashboard'},
                {title: 'Services', href: '/dashboard/services'},
                {title: 'Data' },
            ]}
        />

        <div className='flex flex-col'>
          <Suspense fallback={<div>Loading...</div>}>
            <DataComponent />
          </Suspense>
        </div>
    </WidthWrapper>
  )
}

export default DataServicesPage