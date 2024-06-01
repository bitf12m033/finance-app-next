import Separator from "../separator/separator"
import TransactionItem from "../transactionItem/transactionItem"
import TransactionSummaryItem from "../transactionSummaryItem/transactionSummaryItem"

const groupAndSumTransactionsByDate = (transactions) => {
    const grouped = {}
    for (const transaction of transactions) {
      const date = transaction.created_at.split('T')[0]
      if(!grouped[date]) {
        grouped[date] = {transactions: [], amount: 0}
      }
      grouped[date].transactions.push(transaction)
      const amount = transaction.type === 'Expense' ? -transaction.amount : transaction.amount
      grouped[date].amount += amount
    }
    return grouped
  }

export default async function TransactionList() {
    const response = await fetch(
      `${process.env.API_URL}/transactions`
    )
    const transactions = await response.json()
  
    const grouped = groupAndSumTransactionsByDate(transactions)

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