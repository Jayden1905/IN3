import { redirect } from 'next/navigation'

export default async function Page() {
  const res = await fetch('https://ipinfo.io/json')
  const data = await res.json()

  switch (data.country) {
    case 'SG':
      redirect('/sg')
    case 'US':
      redirect('/us')
    default:
      redirect('/sg')
  }
}
