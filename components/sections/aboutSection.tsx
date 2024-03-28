import Container from '@/components/layout/container'
import MyButton from '@/components/ui/myButton'
import { headerFont } from '@/utils/fonts'
import Image from 'next/image'
import { TiTick } from 'react-icons/ti'

export default function AboutSection({}) {
  return (
    <>
      <section className="overflow-hidden">
        {/* <div className="bg-primary">
          <svg
            width="1600"
            height="119"
            viewBox="0 0 1600 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 39.7565L56.6667 46.3808C113.333 52.7574 226.667 66.3774 340 56.2862C453.333 46.5665 566.667 13.1356 680 3.41593C793.333 -6.67523 906.667 6.94474 1020 26.5699C1133.33 46.5665 1246.67 72.5683 1360 79.3783C1473.33 86.1882 1586.67 72.5683 1643.33 66.1916L1700 59.5674V119H1643.33C1586.67 119 1473.33 119 1360 119C1246.67 119 1133.33 119 1020 119C906.667 119 793.333 119 680 119C566.667 119 453.333 119 340 119C226.667 119 113.333 119 56.6667 119H0V39.7565Z"
              fill="#F4F4F5"
            />
          </svg>
        </div> */}
        <div className="relative overflow-hidden bg-white pt-16">
          <div className="pb-10 pt-4 md:pb-24">
            <Container className="flex flex-col gap-10 md:gap-28">
              <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
                <div className="flex flex-col gap-6 md:w-1/2">
                  <p className="text-myOrange flex items-center gap-2 text-lg font-bold tracking-wider">
                    <span className="bg-myOrange h-[2px] w-10"></span>
                    Robotics & Coding
                  </p>
                  <h1
                    className={`text-4xl font-bold leading-[2.8rem] tracking-wide md:text-4xl md:leading-[3rem]`}
                  >
                    Initiate your learning with Coding
                  </h1>
                  <p className="text-lg tracking-wider">
                    We are the leading provider of technology education in
                    Singapore that specialize in robotics and coding for
                    students. We offer powerful and proven effective technology
                    enhanced education curriculums that can change the way our
                    students learn and think in the 21st Century.
                  </p>
                  <div>
                    <MyButton
                      className="bg-myOrange px-3 py-3 text-lg"
                      label="Explore Journey"
                      href="/about-us"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="border-dark image-frame-shadow w-fit border-2">
                    <Image
                      src="/robo_competition.jpeg"
                      alt="about_robo"
                      sizes="100vw"
                      style={{
                        width: '550px',
                        height: '350px',
                      }}
                      width={550}
                      height={350}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
                <div className="md:w-1/2">
                  <div className="border-dark image-frame-shadow hidden w-fit border-2 md:block">
                    <Image
                      src="/learning_model.jpeg"
                      alt="about_robo"
                      sizes="100vw"
                      style={{
                        width: '450px',
                        height: '550px',
                      }}
                      width={450}
                      height={550}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6 md:w-1/2">
                  <p className="text-myOrange flex items-center gap-2 text-lg font-bold tracking-wider">
                    <span className="bg-myOrange h-[2px] w-10"></span>
                    Learning Model
                  </p>
                  <h1
                    className={`text-4xl font-bold leading-[2.8rem] tracking-wide md:text-4xl md:leading-[3rem]`}
                  >
                    Understanding about our learning model
                  </h1>
                  <p className="text-lg tracking-wider">
                    The &quot;Integrate, Innovate, and Inspire&quot; learning
                    model seamlessly combines diverse disciplines, innovative
                    teaching methods, and a motivational environment to foster a
                    comprehensive understanding and inspire lifelong learning in
                    an ever-evolving world.
                  </p>
                  <ul className="flex flex-col gap-5 text-xl tracking-wide">
                    <li className="flex items-center gap-2">
                      <TiTick className="text-3xl" />
                      Combines diverse disciplines
                    </li>
                    <li className="flex items-center gap-2">
                      <TiTick className="text-3xl" />
                      Utilizes innovative teaching
                    </li>
                    <li className="flex items-center gap-2">
                      <TiTick className="text-3xl" />
                      Sparks enthusiasm for learning
                    </li>
                  </ul>
                </div>
                <div className="border-dark image-frame-shadow block w-fit border-2 md:hidden">
                  <Image
                    src="/learning_model.jpeg"
                    alt="about_robo"
                    sizes="100vw"
                    style={{
                      width: '400px',
                      height: '450px',
                    }}
                    width={400}
                    height={450}
                  />
                </div>
              </div>
            </Container>
          </div>
          {/* <svg
            width="1600"
            height="119"
            viewBox="0 0 1600 119"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 39.7565L56.6667 46.3808C113.333 52.7574 226.667 66.3774 340 56.2862C453.333 46.5665 566.667 13.1356 680 3.41593C793.333 -6.67523 906.667 6.94474 1020 26.5699C1133.33 46.5665 1246.67 72.5683 1360 79.3783C1473.33 86.1882 1586.67 72.5683 1643.33 66.1916L1700 59.5674V119H1643.33C1586.67 119 1473.33 119 1360 119C1246.67 119 1133.33 119 1020 119C906.667 119 793.333 119 680 119C566.667 119 453.333 119 340 119C226.667 119 113.333 119 56.6667 119H0V39.7565Z"
              fill="#E4E4E4"
            />
          </svg> */}
        </div>
      </section>
    </>
  )
}
