'use client'

import { subscribeFormAction } from '@/utils/actions'
import { urlFor } from '@/utils/sanity/client'
import { CoursesType } from '@/utils/types'
import { ReloadIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import { useFormStatus } from 'react-dom'
import { MdMailOutline } from 'react-icons/md'
import FeaturedCard from '../cards/featuredCard'
import Container from '../layout/container'
import AboutSection from '../sections/aboutSection'
import PotentialSection from '../sections/potentialSection'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export default function HomePage({ courses }: { courses: CoursesType[] }) {
  return (
    <div>
      <Container className="mb-20">
        <section className="flex w-full flex-col items-start gap-6 md:flex-row">
          <div className="flex w-full flex-col gap-6 md:w-1/2">
            <h1
              style={{ wordSpacing: '0.3rem' }}
              className={`font-sfpro text-5xl font-bold md:text-7xl`}
            >
              Become The Best At{' '}
              <span className="text-myOrange">Robotic & Coding.</span>
            </h1>
            <p className="text-2xl leading-10 tracking-wider">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              esse nostrum natus ea repudiandae at, optio dolorem adipisci
              quibusdam voluptatem unde, quam id vitae sunt obcaecati
              consectetur ullam quo voluptas!
            </p>
            <div>
              <Button
                size={'lg'}
                className="bg-myOrange p-6 text-lg uppercase tracking-wider hover:bg-orange-600"
              >
                get your free trial
              </Button>
            </div>
          </div>
          <div className="relative h-[480px] w-full md:w-1/2">
            <Image
              src={'/kid_with_vr-Photoroom.png'}
              alt="Image"
              className="rounded-md object-cover"
              fill
              priority
            />
          </div>
        </section>
      </Container>
      <Container className="mb-10 flex w-full flex-col items-center gap-4 md:flex-row">
        <div className="flex w-full gap-4">
          <div>
            <MdMailOutline className="border-myOrange text-myOrange h-16 w-16 rounded-full border-[3px] p-2" />
          </div>
          <div className="w-full">
            <h1 className="text-myOrange text-3xl font-bold uppercase">
              hello!
            </h1>
            <p className="text-lg tracking-wider">
              Sign me up for regular updates on upcoming IN3LABS programs,
              courses, news and events.
            </p>
          </div>
        </div>
        <div className="w-full">
          <form
            action={subscribeFormAction}
            className="flex items-center justify-center gap-2"
          >
            <Input
              placeholder="Your email"
              name="email"
              className="h-12 text-lg"
            />
            <SubFormSubmitButton />
          </form>
        </div>
      </Container>
      <Container className="mb-10 md:mb-36">
        <div className="flex flex-col items-center justify-center">
          <h1
            className={`font-sfpro text-center text-5xl font-bold tracking-wide md:text-8xl`}
          >
            <span className="text-myOrange">Featured</span> Courses
          </h1>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
            {courses.map((course, index) => (
              <FeaturedCard
                key={index}
                title={course.title}
                imgUrl={urlFor(course.mainImage).url()}
                ageGroup={course.ageGroup}
                slug={course.slug.current}
              />
            ))}
          </div>
        </div>
      </Container>
      <div className="bg-white sm:mb-20">
        <Container className="flex h-full w-full flex-col gap-10 md:flex-row">
          <div className="border-myBlack flex flex-col justify-center border-r-0 border-opacity-20 md:w-1/2 md:border-r">
            <div className="mb-6 md:mb-0">
              <h1
                className={`pb-10 text-5xl font-bold leading-[3rem] tracking-wider md:text-5xl md:leading-[3.5rem]`}
              >
                Initiate your learning <br />
                with
                <span className="text-myOrange"> coding & robotic.</span>
              </h1>
              <Link
                href={'#featured-courses'}
                className="hover:text-primary text-myOrange hover:bg-myOrange px-2 py-3 text-xl underline underline-offset-[15px] transition-all duration-150 ease-in-out hover:text-white hover:no-underline"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center md:w-1/2">
            <p className="mb-6 text-lg tracking-wider">
              We are the leading provider of technology education in Singapore
              that specialize in robotics and coding for students. We offer
              powerful and proven effective technology enhanced education
              curriculums that can change the way our students learn and think
              in the 21st Century.
            </p>
          </div>
        </Container>
        <section id="featured-courses"></section>
      </div>
      <AboutSection />
      <Container>
        <iframe
          className="video-frame-shadow h-[300px] w-full object-cover md:h-[800px]"
          src={'https://www.youtube.com/embed/5fFtcLgmttE'}
          title="in3labs Holiday Workshops"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        ></iframe>
      </Container>

      <Container className="mb-10 mt-16 md:mb-0">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap py-12">
            <span className="mx-4 text-4xl">Marquee Item 1</span>
            <span className="mx-4 text-4xl">Marquee Item 2</span>
            <span className="mx-4 text-4xl">Marquee Item 3</span>
            <span className="mx-4 text-4xl">Marquee Item 4</span>
            <span className="mx-4 text-4xl">Marquee Item 5</span>
          </div>

          <div className="animate-marquee2 absolute top-0 whitespace-nowrap py-12">
            <span className="mx-4 text-4xl">Marquee Item 1</span>
            <span className="mx-4 text-4xl">Marquee Item 2</span>
            <span className="mx-4 text-4xl">Marquee Item 3</span>
            <span className="mx-4 text-4xl">Marquee Item 4</span>
            <span className="mx-4 text-4xl">Marquee Item 5</span>
          </div>
        </div>
      </Container>
      <PotentialSection />
    </div>
  )
}

const SubFormSubmitButton = () => {
  const subStatus = useFormStatus()
  return (
    <>
      {subStatus.pending ? (
        <Button
          disabled
          className="bg-myOrange p-6 text-lg uppercase hover:bg-orange-600"
        >
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        </Button>
      ) : (
        <Button
          name="subscribe_button"
          className="bg-myOrange p-6 text-lg uppercase hover:bg-orange-600"
        >
          Subscribe
        </Button>
      )}
    </>
  )
}
