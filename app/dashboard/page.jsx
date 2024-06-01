import TransactionListFallback from '@/components/dashboard/transactionListFallback/transactionListFallback'
import Trend from '@/components/dashboard/trend/trend'
import TransactionList from '@/components/transactionList/transactionList'
import React, { Suspense } from 'react'

const DashboardPage = () => {
  return (
    <>
      <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
      <Suspense>
        <Trend type="Income" />
      </Suspense>
      <Suspense>
        <Trend type="Expense" />
      </Suspense>
      <Suspense>
        <Trend type="Saving" />
      </Suspense>
      <Suspense>
        <Trend type="Investment" />
      </Suspense>
    </section>

    <Suspense fallback={<TransactionListFallback />}>
      <TransactionList />
    </Suspense>
    </>
  )
}

export default DashboardPage