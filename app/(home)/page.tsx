import { redirect } from 'next/navigation'

export default async function Page() {
  const res = await fetch('https://ipinfo.io/json')
  const data = await res.json()

  data.country === 'US' ? redirect('/us') : redirect('/sg')
}
