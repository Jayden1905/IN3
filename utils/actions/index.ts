'use server'

import { revalidatePath } from 'next/cache'

export async function subscribeFormAction(formData: FormData) {
  const email = formData.get('email') as string
  revalidatePath('/')
}
