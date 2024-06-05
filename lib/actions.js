'use server'
import { revalidatePath, revalidateTag } from 'next/cache'
import { createClient } from './supabase/server'
import { transactionSchema } from './validation'
export async function purgeTransactionListCache() {
  revalidateTag('transaction-list')
}

export async function createTransaction(formData) {
  // Handle errors
  // Validate data
  const validated = transactionSchema.safeParse(formData)
  if (!validated.success) {
    throw new Error('Invalid data')
  }
  const {error} = await createClient().from('transactions').insert(formData)
  if (error) {
    throw new Error('Failed creating the transaction')
  }

  revalidatePath('/dashboard')
}