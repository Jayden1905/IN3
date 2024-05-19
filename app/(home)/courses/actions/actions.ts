'use server'

import { client } from '@/utils/sanity/client'
import { CoursesType } from '@/utils/types'
import { groq } from 'next-sanity'

export async function getCourse(slug: string) {
  const query = groq`
  *[_type == "courses" && slug.current == $slug][0] {
    title,
    description,
    subCourses[]-> {
      title,
      mainImage,
      ageGroup,
      description
    },
  }
  `

  const data = await client.fetch<CoursesType>(query, { slug })

  return data
}

export async function getSubCourse(title: string) {
  const query = groq`
  *[_type == "subCourses" && title == $title][0] {
    description,
  }
  `

  const data = await client.fetch(query, { title })

  return data
}
