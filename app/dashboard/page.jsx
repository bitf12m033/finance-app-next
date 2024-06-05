import TransactionListFallback from '@/components/dashboard/transactionListFallback/transactionListFallback'
import Trend from '@/components/dashboard/trend/trend'
import TrendFallback from '@/components/dashboard/trendFallback/trendFallback'
import TransactionList from '@/components/transactionList/transactionList'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from'react'
import { variants, sizes } from '@/lib/variants'
import { types } from '@/lib/consts'
import { ErrorBoundary } from 'react-error-boundary'


const DashboardPage = async () => {

  return (
    <>
      <section className="mb-8">
        <h1 className="text-4xl font-semibold">Summary</h1>
      </section>
      <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
      {types.map(type => <ErrorBoundary key={type} fallback={<div className="text-red-500">Cannot fetch {type} trend data</div>}>
        <Suspense fallback={<TrendFallback />}>
          <Trend type={type} />
        </Suspense>
      </ErrorBoundary>)}
    </section>

    <section className="flex justify-between items-center mb-8">
      <h2 className="text-2xl">Transactions</h2>
      <Link href="/dashboard/transaction/add" className={`flex items-center space-x-1 ${variants['outline']} ${sizes['sm']}`}>
        <PlusCircle className="w-4 h-4" />
        <div>Add</div>
      </Link>
    </section>
    <Suspense fallback={<TransactionListFallback />}>
      <TransactionList />
    </Suspense>
    </>
  )
}

export default DashboardPage