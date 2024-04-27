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
          <h1 className="text-primary text-center text-4xl font-bold md:text-6xl">
            {data.title}
          </h1>
          <p className="text-primary mt-4 text-center text-lg tracking-wide md:text-2xl">
            {data.description}
          </p>
        </div>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-10">
          <li className="flex flex-col items-center justify-center gap-2">
            <Image
              className="h-auto w-auto"
              src={'/coding.png'}
              alt="1"
              width={70}
              height={70}
            />
          </li>
          <li className="flex flex-col items-center justify-center gap-2">
            <Image
              className="h-auto w-auto"
              src={'/robotic.png'}
              alt="1"
              width={100}
              height={100}
            />
          </li>
          <li className="flex flex-col items-center justify-center gap-2">
            <Image
              className="h-auto w-auto"
              src={'/rocket.png'}
              alt="1"
              width={120}
              height={120}
            />
          </li>
        </ul>
        <Button
          size={'lg'}
          className="mt-10 rounded bg-white px-4 py-3 text-lg font-semibold tracking-wide"
        >
          Register Now
        </Button>
      </div>
      <Container className="mt-10">
        <div className="flex flex-col gap-14">
          {subCourses.map((subCourse, i) => (
            <div
              key={i}
              className="flex flex-col gap-16 rounded-xl border-l-[8px] border-black bg-white p-5 md:flex-row"
            >
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold">{subCourse.title}</h1>
                <div className="relative h-72 w-full overflow-hidden rounded-lg border-2 border-black">
                  <Image
                    className="h-full w-full object-cover"
                    src={urlFor(subCourse.mainImage).url()}
                    alt="1"
                    fill
                  />
                </div>
                <p className="text-lg tracking-wide">{subCourse.description}</p>
                <p className="text-xl font-bold tracking-wide">
                  Age:{' '}
                  <span className="text-myOrange">{subCourse.ageGroup}</span>
                </p>
                <div className="flex gap-4">
                  <Button className="bg-myOrange rounded px-4 py-3 font-semibold tracking-wide text-white">
                    Book a Trial
                  </Button>
                  <Button className="rounded bg-black px-4 py-3 font-semibold tracking-wide text-white">
                    More Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
