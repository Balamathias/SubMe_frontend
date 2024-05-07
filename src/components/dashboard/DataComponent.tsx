import { getUser } from '@/lib/supabase/accounts'
import React from 'react'
import BuyData from './BuyData'

const DataComponent = async () => {
    const { data } = await getUser()
  return (
    <div>
        <BuyData user={data!} />
    </div>
  )
}

export default DataComponent