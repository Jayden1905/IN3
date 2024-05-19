import Container from '@/components/layout/container'
import CockpitSvg from '@/components/svgs/cockpitSvg'
import PlanetSvg from '@/components/svgs/planetSvg'
import RocketSvg from '@/components/svgs/rocketSvg'
import SatelliteSvg from '@/components/svgs/satelliteSvg'
import Image from 'next/image'
import { Button } from '../ui/button'

export default function PotentialSection({}) {
  return (
    <section className="md:mt-16">
      <Container className="flex flex-col items-center gap-10">
        <h1
          className={`text-center text-5xl font-bold tracking-wide md:text-7xl`}
        >
          Unlock your coding potential
        </h1>
        <p className="text-center text-lg tracking-wider md:text-2xl">
          We educate youth in STEM, fostering creators, inventors,
          <br className="hidden md:block" />
          and innovative leaders for the future of our nation.
        </p>
        <div>
          <Button size={'lg'} className="py-6 text-lg">
            Explore Potential
          </Button>
        </div>
        <div className="mt-10">
          <ul className="flex flex-wrap items-center justify-center gap-8">
            <li className="flex flex-col items-center justify-center gap-2">
              <Image
                className="h-auto w-auto"
                src={'/1.png'}
                alt="1"
                width={100}
                height={100}
              />
              <h1 className={`mb-1 text-2xl font-bold`}>Education</h1>
              <p className="text-center tracking-wider">
                Equipping youth with essential <br /> STEM skills for future
                success.
              </p>
            </li>
            <li className="flex flex-col items-center justify-center gap-2">
              <Image
                className="h-auto w-auto"
                src={'/2.png'}
                alt="1"
                width={100}
                height={100}
              />
              <h1 className={`mb-1 text-2xl font-bold`}>Fostering</h1>
              <p className="text-center tracking-wider">
                Nurturing tech creativity to empower <br /> young innovative
                thinkers.
              </p>
            </li>
            <li className="flex flex-col items-center justify-center gap-2">
              <Image
                className="h-auto w-auto"
                src={'/3.png'}
                alt="1"
                width={100}
                height={100}
              />
              <h1 className={`mb-1 text-2xl font-bold`}>Cultivating</h1>
              <p className="text-center tracking-wider">
                Instilling resilience for cultivating <br /> inventive minds and
                problem-solvers.
              </p>
            </li>
            <li className="flex flex-col items-center justify-center gap-2">
              <Image
                className="h-auto w-auto"
                src={'/4.png'}
                alt="1"
                width={100}
                height={100}
              />
              <h1 className={`mb-1 text-2xl font-bold`}>Developing</h1>
              <p className="text-center tracking-wider">
                Shaping innovative leaders, contributing <br /> to our
                nation&apos;s progress.
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}
