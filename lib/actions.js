'use server'
import { revalidatePath, revalidateTag } from 'next/cache'
import { createClient } from './supabase/server'

export async function purgeTransactionListCache() {
  revalidateTag('transaction-list')
}

export async function createTransaction(formData) {
  // Handle errors
  // Validate data

  const {error} = await createClient().from('transactions').insert(formData)
  if (error) {
    throw new Error('Failed creating the transaction')
  }

  revalidatePath('/dashboard')
}