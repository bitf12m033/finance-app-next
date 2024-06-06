import { deleteTransaction } from "@/lib/actions"
import Button from "../button/button"


export default function TransactionItemRemoveButton({ id }) {
  return <Button onClick={async () => {
    await deleteTransaction(id)
  }}>X</Button>
}