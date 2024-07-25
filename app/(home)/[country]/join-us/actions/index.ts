'use server'

import { revalidatePath } from 'next/cache'

export async function joinUsFormAction(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const role = formData.get('role') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/email`,
      {
        method: 'POST',
        body: JSON.stringify({ name, email, role, subject, message }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    if (response.ok) {
      revalidatePath(`/join-us`)
    }
  } catch (err) {
    console.log(err)
  }
}
