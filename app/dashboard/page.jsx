import TransactionListFallback from '@/components/dashboard/transactionListFallback/transactionListFallback'
import TransactionList from '@/components/transactionList/transactionList'
import React, { Suspense } from 'react'

const DashboardPage = () => {
  return (
    <Suspense fallback={<TransactionListFallback />}>
      <TransactionList />
    </Suspense>
  )
}

export default DashboardPage