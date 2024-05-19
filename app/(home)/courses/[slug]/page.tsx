import Container from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { urlFor } from '@/utils/sanity/client'
import Image from 'next/image'
import { getCourse } from '../actions/actions'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CopyIcon } from '@radix-ui/react-icons'

export const dynamic = 'force-dynamic'

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
          <h1 className="text-center text-4xl font-bold text-white md:text-8xl">
            {data.title}
          </h1>
          <p className="mt-4 text-center text-lg tracking-wide text-white md:text-xl">
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
                className="flex w-full flex-col gap-16 rounded-xl border border-l-[8px] border-black bg-white p-5 md:flex-row"
              >
                <div className="flex w-full flex-col gap-4">
                  <h1 className="text-3xl font-bold">{subCourse.title}</h1>
                  <div className="relative h-72 w-full overflow-hidden rounded-lg border-2 border-black">
                    <Image
                      className="h-full w-full object-cover"
                      src={urlFor(
                        subCourse.mainImage || { asset: { _ref: '' } }
                      ).url()}
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
                    <Button
                      size={'lg'}
                      className="bg-myOrange hover:bg-myOrange text-lg text-white hover:text-white"
                    >
                      Book a Trial
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size={'lg'} className="text-lg">
                          Learn More
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md rounded-lg sm:max-w-4xl">
                        <DialogHeader>
                          <DialogTitle className="text-3xl">
                            {subCourse.title}
                          </DialogTitle>
                          <DialogDescription className="text-lg">
                            Kids with age {subCourse.ageGroup} can attend this
                            course.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col gap-2 md:flex-row">
                          <Image
                            src={urlFor(
                              subCourse.mainImage || { asset: { _ref: '' } }
                            ).url()}
                            alt="1"
                            width={400}
                            height={400}
                            className="rounded-lg border border-black"
                          />
                          <div className="flex h-full flex-col justify-between gap-2">
                            <p className="text-xl">
                              {subCourse.description ||
                                'No description provided for this course'}
                            </p>
                            <Button
                              type="button"
                              size={'lg'}
                              className="bg-myOrange hover:bg-myOrange text-lg text-white hover:text-white"
                            >
                              Book a Trial
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    {/* <DialogButton index={i} title={subCourse.title || ''} /> */}
                  </div>
                </div>
              </div>
            ))}
          {/* {subCourses && <Dialog data={subCourses} />} */}
        </div>
      </Container>
    </div>
  )
}
