'use client'
import Separator from "../separator/separator"
import TransactionItem from "../transactionItem/transactionItem"
import TransactionSummaryItem from "../transactionSummaryItem/transactionSummaryItem"
import { groupAndSumTransactionsByDate } from "@/lib/utils"

export default async function TransactionList({initialTransactions}) {
    
    const grouped = groupAndSumTransactionsByDate(initialTransactions)

    return (
        <div className="space-y-8">
            {
                Object.entries(grouped).map(([date, {transactions, amount}]) => {
                    return (
                        <div key={date}>
                            <TransactionSummaryItem date={date} amount={amount} />
                           <Separator/>
                            <section className="space-y-4">
                            {transactions.map(transaction => <div key={transaction.id}>
                                <TransactionItem {...transaction} />
                            </div>)}
                            </section>
                        </div>
                    )
                })
            }
        </div>
    )
  }