import TransactionForm from '@/components/dashboard/transactionForm/transactionForm'
import React from 'react'

export const metadata = {
  title: "Add Transaction"
}
const TransactionAddPage = () => {
    return <>
    <h1 className="text-4xl font-semibold mb-8">Add Transaction</h1>
    <TransactionForm />
  </>
}

export default TransactionAddPage