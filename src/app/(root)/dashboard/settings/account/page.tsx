import WidthWrapper from '@/components/WidthWrapper'
import { BreadcrumbComponent } from '@/components/dashboard/BreadCrumbComponent'
import { getReservedAccount, monnifyContractCode } from '@/lib/monnify'
import React from 'react'

const AccountSettingsPage = async () => {
  const res = await getReservedAccount({
    accountName: 'Test Account',
    accountReference: 'Ref_123456789',
    currencyCode: 'NGN',
    contractCode: monnifyContractCode as string,
    customerEmail: 'balamathias40@gmail.com',
    customerName: 'Mathias Bala',
    getAllAvailableBanks: true,
  })

  console.log(res)

  return (
    <WidthWrapper>
        <BreadcrumbComponent items={[
            { title: 'Dashboard', href: '/dashboard' },
            { title: 'Settings', href: '/dashboard/settings' },
            { title: 'Account' },
        ]} />
    </WidthWrapper>
  )
}

export default AccountSettingsPage