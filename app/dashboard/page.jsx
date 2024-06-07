import TransactionListFallback from '@/components/dashboard/transactionListFallback/transactionListFallback'
import Trend from '@/components/dashboard/trend/trend'
import TrendFallback from '@/components/dashboard/trendFallback/trendFallback'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from'react'
import { variants, sizes } from '@/lib/variants'
import { types } from '@/lib/consts'
import { ErrorBoundary } from 'react-error-boundary'
import Range from '@/components/dashboard/range/range'
import TransactionListWrapper from '@/components/dashboard/transactionListWrapper/transactionListWrapper'
import { createClient } from '@/lib/supabase/server'


const DashboardPage = async ({searchParams}) => {
  const range = searchParams?.range ?? 'last30days'

  const supabase = createClient()
  console.log(await supabase.auth.getUser())
  return (
    <>
      <section className="mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-semibold">Summary</h1>
        <aside>
          <Range />
        </aside>
      </section>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {types.map(type => <ErrorBoundary key={type} fallback={<div className="text-red-500">Cannot fetch {type} trend data</div>}>
        <Suspense fallback={<TrendFallback />}>
          <Trend type={type} range={range} />
        </Suspense>
      </ErrorBoundary>)}
    </section>

    <section className="flex justify-between items-center">
      <h2 className="text-2xl">Transactions</h2>
      <Link href="/dashboard/transaction/add" className={`flex items-center space-x-1 ${variants['outline']} ${sizes['sm']}`}>
        <PlusCircle className="w-4 h-4" />
        <div>Add</div>
      </Link>
    </section>
    <Suspense fallback={<TransactionListFallback />}>
      <TransactionListWrapper range={range} />
    </Suspense>
    </>
  )
}

export default DashboardPage