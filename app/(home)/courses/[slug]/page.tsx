import Dialog from '@/components/dialog/dialog'
import DialogButton from '@/components/dialog/dialogButton'
import Container from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { client, urlFor } from '@/utils/sanity/client'
import { CoursesType } from '@/utils/types'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

async function getCourse(slug: string) {
  const query = `
  *[_type == "courses" && slug.current == $slug][0] {
    title,
    description,
    subCourses[]-> {
      title,
      description,
      mainImage,
      ageGroup,
    },
  }
  `

  const data = await client.fetch<CoursesType>(query, { slug })

  return data
}

export default async function CoursePage({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getCourse(params.slug)
  const subCourses = data.subCourses

  return (
    <div>
      <div className="flex h-full w-full flex-col items-center gap-6 bg-[#4e374f] p-10">
        <div>
          <h1 className="text-primary text-center text-4xl font-bold md:text-8xl">
            {data.title}
          </h1>
          <p className="text-primary mt-4 text-center text-lg tracking-wide md:text-xl">
            {data.description}
          </p>
        </div>
      </div>
      <Container className="mt-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {subCourses &&
            subCourses.map((subCourse, i) => (
              <div
                key={i}
                className="flex w-full flex-col gap-16 rounded-xl border-l-[8px] border-black bg-white p-5 md:flex-row"
              >
                <div className="flex w-full flex-col gap-4">
                  <h1 className="text-3xl font-bold">{subCourse.title}</h1>
                  <div className="relative h-72 w-full overflow-hidden rounded-lg border-2 border-black">
                    <Image
                      className="h-full w-full object-cover"
                      src={urlFor(subCourse.mainImage).url()}
                      alt="1"
                      fill
                      sizes="(min-width: 640px) 640px, 100vw"
                    />
                  </div>
                  <p className="mt-auto text-xl font-bold tracking-wide">
                    Age:{' '}
                    <span className="text-myOrange">{subCourse.ageGroup}</span>
                  </p>
                  <div className="flex gap-4">
                    <Button className="bg-myOrange rounded px-4 py-3 font-semibold tracking-wide text-white">
                      Book a Trial
                    </Button>
                    <DialogButton index={i} />
                  </div>
                </div>
              </div>
            ))}
          {subCourses && <Dialog data={subCourses} />}
        </div>
      </Container>
    </div>
  )
}
