import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface BlogPost {
  _id: string
  title: string
  smallDescription: string
  slug: {
    current: string
  }
  mainImage: SanityImageSource
}

export type ModuleType = {
  name: string
  sessions: string
}

export type CoursesType = {
  title: string
  slug: {
    current: string
  }
  mainImage: SanityImageSource
  ageGroup: string
  description: string
  subCourses: SubCoursesType[]
}

export type SubCoursesType = {
  title: string
  description: string
  bannerColor: string
  mainImage: SanityImageSource
  ageGroup: string
  modules: ModuleType[]
  carouselImages: SanityImageSource[]
}
