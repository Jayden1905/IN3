import HomePage from '@/components/pages/home'
import { client } from '@/utils/sanity/client'
import { CoursesType } from '@/utils/types'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IN3',
  description: 'Robitcs and Coding Educaton for kids.',
  keywords: ['robotics', 'coding', 'education', 'kids'],
}

async function getCourses(country: string) {
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

export default async function Home({
  params,
}: {
  params: {
    country: string
  }
}) {
  const courses = await getCourses(params.country)

  return (
    <div>
      <HomePage courses={courses} />
    </div>
  )
}
