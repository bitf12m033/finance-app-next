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
import { createTransaction } from "@/lib/actions";
import FormError from "@/components/formError/formError";
export default function TransactionForm() {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
      } = useForm({
        mode: "onTouched",
        resolver: zodResolver(transactionSchema),
      })
    
    const router = useRouter()
    const [isSaving, setSaving] = useState(false)
    const [lastError, setLastError] = useState()
    const type = watch('type')

    const onSubmit = async (data) => {
     
        setSaving(true)
        setLastError()
        try {
            
          await createTransaction(data)
          router.push('/dashboard')
        }
        catch (error) {
          setLastError(error)
        } 
        finally {
          setSaving(false)
        }  
    }

    return <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label className="mb-1">Type</Label>
        <Select {...register("type" ,{
          onChange: (e) => {
            if (e.target.value !== "Expense") {
              setValue("category", "")
            }
          }
        })}>
          {types.map(type => <option key={type}>{type}</option>)}
        </Select>
      </div>

      <div>
        <Label className="mb-1">Category</Label>
        <Select {...register("category")} disabled={type !=='Expense'}>
          <option value=''>Select a category</option> 
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

    <div className="flex justify-between items-center">
      <div>
        {lastError && <FormError error={lastError} />}
      </div>
    <Button variant="ghost" type="submit" disabled={isSaving}>Save</Button>    </div>
  </form>
}