'use server'

import { client } from '@/utils/sanity/client'
import { CoursesType } from '@/utils/types'

export async function getCourse(slug: string) {
  const query = `
  *[_type == "courses" && slug.current == $slug][0] {
    title,
    description,
    subCourses[]-> {
      title,
      mainImage,
      ageGroup,
    },
  }
  `

  const data = await client.fetch(query, { slug })

  return data
}

export async function getSubCourse(title: string) {
  const query = `
  *[_type == "subCourses" && title == $title][0] {
    description,
  }
  `

  const data = await client.fetch(query, { title })

  return data
}
