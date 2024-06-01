import TransactionListFallback from '@/components/dashboard/transactionListFallback/transactionListFallback'
import Trend from '@/components/dashboard/trend/trend'
import TrendFallback from '@/components/dashboard/trendFallback/trendFallback'
import TransactionList from '@/components/transactionList/transactionList'
import React, { Suspense } from 'react'

const DashboardPage = () => {
  return (
    <>
      <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
      <Suspense fallback={<TrendFallback/>}>
        <Trend type="Income" />
      </Suspense>
      <Suspense fallback={<TrendFallback/>}>
        <Trend type="Expense" />
      </Suspense>
      <Suspense fallback={<TrendFallback/>}> 
        <Trend type="Saving" />
      </Suspense>
      <Suspense fallback={<TrendFallback/>}>
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