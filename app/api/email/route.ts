import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  })

  const body = await req.json()
  if (
    !body.name ||
    !body.email ||
    !body.role ||
    !body.subject ||
    !body.message
  ) {
    return NextResponse.json(new Error('Missing required fields'), {
      status: 400,
    })
  }

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: body.subject,
      html: `
            <h2>Sender Name: ${body.name}</h2>
            <h2>Sender Email: ${body.email}</h2>
            <h2>Role: ${body.role}</h2>
            <p>${body.message}</p>
        `,
    })

    console.log(info.messageId)

    return NextResponse.json({ message: 'Email sent' })
  } catch (error) {
    console.log(error)
    return NextResponse.json(error, { status: 500 })
  }
}
