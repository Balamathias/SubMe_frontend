import WidthWrapper from '@/components/WidthWrapper'
import { BreadcrumbComponent } from '@/components/dashboard/BreadCrumbComponent'
import { getReservedAccount, initiateSingleTransfer, monnifyContractCode } from '@/lib/monnify'
import React from 'react'

const AccountSettingsPage = async () => {
  // const res = await getReservedAccount({
  //   accountName: 'Test Account',
  //   accountReference: 'Ref_123456789',
  //   currencyCode: 'NGN',
  //   contractCode: monnifyContractCode as string,
  //   customerEmail: 'balamathias40@gmail.com',
  //   customerName: 'Mathias Bala',
  //   getAllAvailableBanks: true,
  // })

  const res = await initiateSingleTransfer({
    amount: 1000,
    currency: 'NGN',
    destinationAccountNumber: '0000000000',
    destinationBankCode: '000000',
    narration: 'Test transfer',
    sourceAccountNumber: '0000000000',
    destinationAccountName: 'Test Account',
    reference: 'Ref_123456789',
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