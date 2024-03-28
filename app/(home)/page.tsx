import Container from '@/components/layout/container'
import AboutSection from '@/components/sections/aboutSection'
import FeaturedCourses from '@/components/sections/featuredCourses'
import PotentialSection from '@/components/sections/potentialSection'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function Home() {
  return (
    <>
      <Container className="mb-20">
        <section className="flex flex-col gap-4">
          <h1
            className={`text-center text-4xl font-bold leading-[3rem] tracking-wider md:text-6xl md:leading-[5rem]`}
          >
            Today is a good day <br /> to start learning{' '}
            <span className="text-myOrange">Coding.</span>
          </h1>
          <p className="text-center text-lg font-light tracking-wide md:text-2xl">
            We are the leading provider of technology education in Singapore{' '}
            <br />
            that specialize in robotics and coding for students.
          </p>
          <div className="mb-6 flex items-center justify-center gap-6">
            <Button className="bg-myOrange text-primary rounded-full px-8 py-2 text-lg tracking-wide">
              Start with a trial class
            </Button>
            <Button className="border-myBlack hover:bg-myBlack rounded-full border-2 px-8 py-2 text-lg tracking-wide transition-all duration-100 ease-in-out hover:text-white">
              Explore Courses
            </Button>
          </div>
          <div className="border-myBlack relative h-[60vh] w-full rounded border-2">
            <Image
              priority
              src={'/kid_with_vr.jpeg'}
              alt="kid with vr"
              fill
              sizes="100%"
              className="rounded object-cover"
            />
          </div>
        </section>
      </Container>
      {/* <HeroSection /> */}
      <div className="mb-16 bg-white py-16">
        <Container className="flex h-full w-full flex-col gap-10 md:flex-row">
          <div className="border-myBlack flex flex-col justify-center border-r-0 border-opacity-20 md:w-1/2 md:border-r">
            <div className="mb-6 md:mb-0">
              <h1
                className={`pb-10 text-4xl font-bold leading-[3rem] tracking-wider md:text-5xl md:leading-[3.5rem]`}
              >
                Ready to learn <br /> robotics and coding?
              </h1>
              <Link
                href={'#featured-courses'}
                className="hover:text-primary text-myOrange hover:bg-myOrange px-2 py-3 text-xl underline underline-offset-[15px] transition-all duration-150 ease-in-out hover:no-underline"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center md:w-1/2">
            <p className="text-xl tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis voluptates sequi consequuntur facere, repudiandae quo?
              dolore necessitatibus delectus reprehenderit consequuntur quos?
            </p>
          </div>
        </Container>
        <section id="featured-courses"></section>
      </div>
      <FeaturedCourses />
      <AboutSection />
      <PotentialSection />
    </>
  )
}
