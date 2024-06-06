'use client'
import { urlFor } from '@/utils/sanity/client'
import { CoursesType } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import FeaturedCard from '../cards/featuredCard'
import Container from '../layout/container'
import AboutSection from '../sections/aboutSection'
import PotentialSection from '../sections/potentialSection'
import { AspectRatio } from '../ui/aspect-ratio'

export default function HomePage({ courses }: { courses: CoursesType[] }) {
  return (
    <div>
      <Container className='mb-20'>
        <section className='flex flex-col gap-4'>
          <h1
            style={{ wordSpacing: '0.3rem' }}
            className={`font-sfpro text-5xl font-bold leading-[3.5rem] md:text-8xl`}
          >
            Become The Best At <span className='text-myOrange'>Coding.</span>
          </h1>
          <AspectRatio ratio={4 / 2.4} className='mt-5'>
            <Image
              src='/kid_with_vr-Photoroom.png'
              alt='Image'
              className='rounded-md object-cover'
              fill
              priority
            />
          </AspectRatio>
        </section>
      </Container>
      <Container className='mb-10 md:mb-36'>
        <div className='flex flex-col items-center justify-center'>
          <h1
            className={`font-sfpro text-center text-5xl font-bold tracking-wide md:text-8xl`}
          >
            Featured Courses
          </h1>
          <div className='mt-16 flex flex-wrap items-center justify-center gap-6'>
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
      <div className='bg-white sm:mb-20'>
        <Container className='flex h-full w-full flex-col gap-10 md:flex-row'>
          <div className='border-myBlack flex flex-col justify-center border-r-0 border-opacity-20 md:w-1/2 md:border-r'>
            <div className='mb-6 md:mb-0'>
              <h1
                className={`pb-10 text-5xl font-bold leading-[3rem] tracking-wider md:text-5xl md:leading-[3.5rem]`}
              >
                Initiate your learning <br />
                with
                <span className='text-myOrange'> coding & robotic.</span>
              </h1>
              <Link
                href={'#featured-courses'}
                className='hover:text-primary text-myOrange hover:bg-myOrange px-2 py-3 text-xl underline underline-offset-[15px] transition-all duration-150 ease-in-out hover:text-white hover:no-underline'
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className='flex flex-col justify-center md:w-1/2'>
            <p className='mb-6 text-lg tracking-wider'>
              We are the leading provider of technology education in Singapore
              that specialize in robotics and coding for students. We offer
              powerful and proven effective technology enhanced education
              curriculums that can change the way our students learn and think
              in the 21st Century.
            </p>
          </div>
        </Container>
        <section id='featured-courses'></section>
      </div>
      <AboutSection />
      <Container>
        <iframe
          className='video-frame-shadow h-[300px] w-full object-cover md:h-[800px]'
          src={'https://www.youtube.com/embed/5fFtcLgmttE'}
          title='in3labs Holiday Workshops'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
        ></iframe>
      </Container>

      <Container className='mb-10 mt-16 md:mb-0'>
        <div className='relative flex overflow-x-hidden'>
          <div className='animate-marquee whitespace-nowrap py-12'>
            <span className='mx-4 text-4xl'>Marquee Item 1</span>
            <span className='mx-4 text-4xl'>Marquee Item 2</span>
            <span className='mx-4 text-4xl'>Marquee Item 3</span>
            <span className='mx-4 text-4xl'>Marquee Item 4</span>
            <span className='mx-4 text-4xl'>Marquee Item 5</span>
          </div>

          <div className='animate-marquee2 absolute top-0 whitespace-nowrap py-12'>
            <span className='mx-4 text-4xl'>Marquee Item 1</span>
            <span className='mx-4 text-4xl'>Marquee Item 2</span>
            <span className='mx-4 text-4xl'>Marquee Item 3</span>
            <span className='mx-4 text-4xl'>Marquee Item 4</span>
            <span className='mx-4 text-4xl'>Marquee Item 5</span>
          </div>
        </div>
      </Container>
      <PotentialSection />
    </div>
  )
}
