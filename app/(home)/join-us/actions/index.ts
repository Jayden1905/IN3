'use server'

import { revalidatePath } from 'next/cache'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
})

export async function joinUsFormAction(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const role = formData.get('role') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: subject,
      html: `
            <h2>Sender Name: ${name}</h2>
            <h2>Sender Email: ${email}</h2>
            <h2>Role: ${role}</h2>
            <p>${message}</p>
        `,
    })

    revalidatePath('/join-us')
  } catch (err) {
    console.log(err)
  }
}
