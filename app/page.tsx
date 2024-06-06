import { redirect } from 'next/navigation'

export default async function Page() {
  const request = await fetch('https://ipinfo.io/json?token=996bb0edca1ff4')
  const data = await request.json()

  console.log(data)

  switch (data.country) {
    case 'SG':
      redirect('/sg')
    case 'US':
      redirect('/us')
    default:
      redirect('/sg')
  }
}
