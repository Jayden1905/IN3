import Container from '@/components/layout/container'
import CockpitSvg from '@/components/svgs/cockpitSvg'
import PlanetSvg from '@/components/svgs/planetSvg'
import RocketSvg from '@/components/svgs/rocketSvg'
import SatelliteSvg from '@/components/svgs/satelliteSvg'
import MyButton from '@/components/ui/myButton'
import { headerFont } from '@/utils/fonts'

export default function PotentialSection({}) {
  return (
    <section className="mb-14 md:mb-36 md:mt-16">
      <Container className="flex flex-col items-center gap-10">
        <h1
          className={`${headerFont} text-center text-4xl font-bold [word-spacing:-5;] md:text-5xl`}
        >
          Unlock your coding potential
        </h1>
        <p className="text-center tracking-wider md:text-xl">
          We educate youth in STEM, fostering creators, inventors,
          <br />
          and innovative leaders for the future of our nation.
        </p>
        <div>
          <MyButton
            className="bg-myOrange p-3 text-lg"
            label="Explore potential"
          />
        </div>
        <div>
          <ul className="flex flex-wrap items-center justify-center gap-8">
            <li className="flex flex-col items-center justify-center gap-2">
              <PlanetSvg />
              <h1 className={`${headerFont} mb-1 text-2xl font-bold`}>
                Education
              </h1>
              <p className="text-center tracking-wider">
                Equipping youth with essential <br /> STEM skills for future
                success.
              </p>
            </li>
            <li className="flex flex-col items-center justify-center gap-2">
              <RocketSvg />
              <h1 className={`${headerFont} mb-1 text-2xl font-bold`}>
                Fostering
              </h1>
              <p className="text-center tracking-wider">
                Nurturing tech creativity to empower <br /> young innovative
                thinkers.
              </p>
            </li>
            <li className="flex flex-col items-center justify-center gap-2">
              <SatelliteSvg />
              <h1 className={`${headerFont} mb-1 text-2xl font-bold`}>
                Cultivating
              </h1>
              <p className="text-center tracking-wider">
                Instilling resilience for cultivating <br /> inventive minds and
                problem-solvers.
              </p>
            </li>
            <li className="flex flex-col items-center justify-center gap-2">
              <CockpitSvg />
              <h1 className={`${headerFont} mb-1 text-2xl font-bold`}>
                Developing
              </h1>
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
