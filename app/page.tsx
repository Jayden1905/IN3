import { redirect } from 'next/navigation'

export default async function Page() {
  await fetch('https://ipinfo.io/json?token=996bb0edca1ff4').then((res) =>
    res.json().then((data) => {
      console.log(data)
      switch (data.country) {
        case 'SG':
          redirect('/sg')
        case 'US':
          redirect('/us')
        default:
          redirect('/sg')
      }
    })
  )
}
