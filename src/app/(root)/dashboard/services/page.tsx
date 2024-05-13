import { DynamicTabs } from '@/components/DynamicTabs'
import WidthWrapper from '@/components/WidthWrapper'
import { BreadcrumbComponent } from '@/components/dashboard/BreadCrumbComponent'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
  title: 'Services',
  description: 'Buy Airtime, Data, Pay Electricity Bills, etc.',
}

const ServicesPage = () => {
  return (
    <WidthWrapper>
        <BreadcrumbComponent 
            items={[
                {title: 'Dashboard', href: '/dashboard'},
                {title: 'Services'},
            ]}
        />

        <DynamicTabs 
            tabs={[
                {label: 'Data', content: <div>Service 1</div>},
                {label: 'Airtime', content: <div>Service 2</div>},
                {label: 'Epins', content: <div>Service 3</div>},
                {label: 'Electricity', content: <div>Service 4</div>},
            ]}
        />
    </WidthWrapper>
  )
}

export default ServicesPage