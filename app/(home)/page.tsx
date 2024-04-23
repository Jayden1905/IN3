import HomePage from '@/components/pages/home'
import { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'IN3',
  description: 'Robitcs and Coding Educaton for kids.',
  keywords: ['robotics', 'coding', 'education', 'kids'],
}

export default function page() {
  return (
    <div>
      <HomePage />
    </div>
  )
}
