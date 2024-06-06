'use client'
import { fetchTransactions } from "@/lib/actions"
import Button from "../button/button"
import Separator from "../separator/separator"
import TransactionItem from "../transactionItem/transactionItem"
import TransactionSummaryItem from "../transactionSummaryItem/transactionSummaryItem"
import { groupAndSumTransactionsByDate } from "@/lib/utils"
import { useState } from "react"
import { Loader } from "lucide-react"

export default  function TransactionList({range , initialTransactions}) {
    const [transactions, setTransactions] = useState(initialTransactions)
    const [offset, setOffset] = useState(initialTransactions.length)
    const [buttonHidden, setButtonHidden] = useState(initialTransactions.length === 0)
    const [loading, setLoading] = useState(false)
    const grouped = groupAndSumTransactionsByDate(transactions)
    
    const handleClick = async (e) => {
        setLoading(true)
        let nextTransactions = null
        try {
        nextTransactions = await fetchTransactions(range, offset, 10)
        setButtonHidden(nextTransactions.length === 0)
        setOffset(prevValue => prevValue + 10)
        setTransactions(prevTransactions => [
            ...prevTransactions,
            ...nextTransactions
        ])
        } finally {
        setLoading(false)
        }
    }
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

            {transactions.length === 0 && <div className="text-center text-gray-400 dark:text-gray-500">No transactions found</div>}
            {!buttonHidden && <div className="flex justify-center">
                <Button variant="ghost" onClick={handleClick} disabled={loading}>
                    <div className="flex items-center space-x-1">
                        {loading && <Loader className="animate-spin" />}
                        <div>Load More</div>
                    </div>
                </Button>
            </div>}
        </div>
    )
  }