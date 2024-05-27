import Container from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { urlFor } from '@/utils/sanity/client'
import Image from 'next/image'
import { getAllCourses, getCourse } from '../actions/actions'

export async function generateStaticParams() {
  const courses = await getAllCourses()

  const paths = courses.map((course) => ({
    params: { slug: course.slug.current },
  }))

  return paths
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getCourse(params.slug)

  return {
    title: data.title,
    description: data.description,
    authors: {
      name: 'Oddinary',
    },
    openGraph: {
      title: data.title,
      url: 'https://localhost:3000/courses/' + params.slug,
      siteName: 'MYSIM',
      type: 'website',
    },
    keywords: ['robotic', 'coding', 'education', 'kids'],
  }
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
      <div className='flex h-full w-full flex-col items-center gap-6 bg-[#4e374f] p-10'>
        <div>
          <h1 className='text-center text-4xl font-bold text-white md:text-8xl'>
            {data.title}
          </h1>
          <p className='mt-4 text-center text-lg tracking-wide text-white md:text-xl'>
            {data.description}
          </p>
        </div>
      </div>
      <Container className='mt-10'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          {subCourses &&
            subCourses.map((subCourse, i) => (
              <div
                key={i}
                className='flex w-full flex-col gap-16 rounded-xl border border-l-[8px] bg-white p-5 md:flex-row'
                style={{ borderLeftColor: subCourse.bannerColor }}
              >
                <div className='flex w-full flex-col gap-4'>
                  <h1 className='text-3xl font-bold'>{subCourse.title}</h1>
                  <div className='relative h-72 w-full overflow-hidden rounded-lg border-2 border-black'>
                    <Image
                      className='h-full w-full object-cover'
                      src={urlFor(
                        subCourse.mainImage || { asset: { _ref: '' } },
                      ).url()}
                      alt='1'
                      fill
                      sizes='(min-width: 640px) 640px, 100vw'
                      priority
                    />
                  </div>
                  <p className='mt-auto text-xl font-bold tracking-wide'>
                    Age:{' '}
                    <span className='text-myOrange'>{subCourse.ageGroup}</span>
                  </p>
                  <div className='flex gap-4'>
                    <Button className='bg-myOrange hover:bg-myOrange text-lg text-white hover:text-white'>
                      Book a Trial
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className='text-lg'>Learn More</Button>
                      </DialogTrigger>
                      <DialogContent className='w-full h-full p-2 sm:p-5 pt-10 sm:h-fit rounded-lg sm:max-w-4xl'>
                        <ScrollArea>
                          <DialogHeader>
                            <DialogTitle className='text-3xl'>
                              {subCourse.title}
                            </DialogTitle>
                            <DialogDescription className='text-lg'>
                              Kids with age {subCourse.ageGroup} can attend this
                              course.
                            </DialogDescription>
                          </DialogHeader>
                          <div className='flex flex-col gap-10'>
                            <div className='w-full relative h-[300px]'>
                              <Image
                                src={urlFor(
                                  subCourse.mainImage || {
                                    asset: { _ref: '' },
                                  },
                                ).url()}
                                alt='1'
                                sizes='(max-width: 28rem) 28rem, 100vw'
                                fill
                                className='object-cover rounded-lg border border-black'
                                priority
                              />
                            </div>
                            <div className='flex h-full flex-col justify-between gap-10'>
                              <p className='text-xl'>
                                {subCourse.description ||
                                  'No description provided for this course'}
                              </p>
                              <div className='flex gap-6'>
                                <Button
                                  type='button'
                                  size={'lg'}
                                  className='bg-myOrange hover:bg-myOrange text-lg text-white hover:text-white'
                                >
                                  Book a Trial
                                </Button>
                                <Button
                                  className='text-lg'
                                  type='button'
                                  size={'lg'}
                                >
                                  Get the Course
                                </Button>
                              </div>
                            </div>
                          </div>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  )
}
