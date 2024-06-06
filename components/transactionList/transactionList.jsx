'use client'
import { fetchTransactions } from "@/lib/actions"
import Button from "../button/button"
import Separator from "../separator/separator"
import TransactionItem from "../transactionItem/transactionItem"
import TransactionSummaryItem from "../transactionSummaryItem/transactionSummaryItem"
import { groupAndSumTransactionsByDate } from "@/lib/utils"
import { useState } from "react"

export default async function TransactionList({range , initialTransactions}) {
    const [transactions, setTransactions] = useState(initialTransactions)
    const [offset, setOffset] = useState(initialTransactions.length)
    const grouped = groupAndSumTransactionsByDate(transactions)
    
    const handleClick = async (e) => {
        const nextTransactions = await fetchTransactions(range, offset, 10)
        setOffset(prevValue => prevValue + 10)
        setTransactions(prevTransactions => [
          ...prevTransactions,
          ...nextTransactions
        ])
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

            <div className="flex justify-center">
                <Button variant="ghost" onClick={handleClick}>Load More</Button>
            </div>
        </div>
    )
  }