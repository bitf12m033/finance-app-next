import TransactionList from "@/components/transactionList/transactionList"
import { fetchTransactions } from "@/lib/actions"

export default async function TransactionListWrapper({ range }) {
    const transactions = await fetchTransactions(range)
    return <TransactionList initialTransactions={transactions} />
  }