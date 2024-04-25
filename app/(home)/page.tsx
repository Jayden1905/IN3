import FeaturedCard from '@/components/cards/featuredCard'
import Container from '@/components/layout/container'
import HomePage from '@/components/pages/home'
import AboutSection from '@/components/sections/aboutSection'
import PotentialSection from '@/components/sections/potentialSection'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { client, urlFor } from '@/utils/sanity/client'
import { CoursesType } from '@/utils/types'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'IN3',
  description: 'Robitcs and Coding Educaton for kids.',
  keywords: ['robotics', 'coding', 'education', 'kids'],
}

async function getCourses() {
  const query = `
  *[_type == "courses" && featured == true ] | order(createdAt asc) {
    title,
    slug,
    ageGroup,
    mainImage,
  }
`
  const data = await client.fetch<CoursesType[]>(query)

  return data
}

export default async function Home() {
  const courses = await getCourses()

  return (
    <div>
      <HomePage courses={courses} />
    </div>
  )
}
