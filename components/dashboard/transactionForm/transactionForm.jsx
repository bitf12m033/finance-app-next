'use client'

import Button from "@/components/button/button";
import Input from "@/components/input/input";
import Label from "@/components/label/label";
import Select from "@/components/select/select";
import { categories, types } from "@/lib/consts";
import { useForm } from "react-hook-form";
import { transactionSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { purgeTransactionListCache } from "@/lib/actions";
import FormError from "@/components/formError/formError";
export default function TransactionForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
        mode: "onTouched",
        resolver: zodResolver(transactionSchema),
      })
    
    const router = useRouter()
    const [isSaving, setSaving] = useState(false)

    const onSubmit = async (data) => {
        setSaving(true)
        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transactions`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...data,
                    created_at: `${data.created_at}T00:00:00`
                })
            })
            await purgeTransactionListCache()
            router.push('/dashboard')
        } finally {
            setSaving(false)
        }  
    }

    return <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label className="mb-1">Type</Label>
        <Select {...register("type")}>
          {types.map(type => <option key={type}>{type}</option>)}
        </Select>
      </div>

      <div>
        <Label className="mb-1">Category</Label>
        <Select {...register("category")}> 
          {categories.map(category => <option key={category}>{category}</option>)}
        </Select>
      </div>

      <div>
        <Label className="mb-1">Date</Label>
        <Input {...register("created_at")} />
       <FormError error={ errors.created_at} />
      </div>

      <div>
        <Label className="mb-1">Amount</Label>
        <Input type="number" {...register("amount")} />
        <FormError error={ errors.amount} />     </div>

      <div className="col-span-1 md:col-span-2">
        <Label className="mb-1">Description</Label>
        <Input {...register("description")} />
        <FormError error={ errors.description} />     </div>
    </div>

    <div className="flex justify-end">
    <Button type="submit" disabled={isSaving}>Save</Button>    </div>
  </form>
}