'use client'
import { deleteTransaction } from "@/lib/actions"
import Button from "../button/button"
import { useState } from "react"
import { X, Loader } from "lucide-react"

export default function TransactionItemRemoveButton({ id }) {
    const [loading, setLoading] = useState()
    const [confirmed, setConfirmed] = useState()
    const handleClick = async () => {
      if (!confirmed) {
        setConfirmed(true)
        return
      }
      try {
        setLoading(true)
        await deleteTransaction(id)
        // notify the parent
      } finally {
        setLoading(false)
      }
    }
    return <Button size="xs" variant={!confirmed ? 'ghost' : 'danger'} onClick={handleClick} aria-disabled={loading}>
      {!loading && <X className="w-4 h-4" />}
      {loading && <Loader className="w-4 h-4 animate-spin" />}
    </Button>
}