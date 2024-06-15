import Container from '@/components/layout/container'
import Image from 'next/image'
import { TiTick } from 'react-icons/ti'
import LearningModel from '@/public/learning_model-Photoroom.png'

export default function AboutSection({}) {
  return (
    <>
      <section className='overflow-hidden'>
        <div className='relative overflow-hidden'>
          <div className='pb-10 pt-4 md:pb-24'>
            <Container className='flex flex-col gap-10 md:gap-28'>
              <div className='flex flex-col items-center justify-between gap-10 md:flex-row'>
                <div>
                  <div className='relative hidden md:block w-[450px] h-[550px]'>
                    <Image
                      src={LearningModel}
                      alt='learning_model'
                      fill
                      sizes='100%'
                    />
                  </div>
                </div>
                <div className='flex flex-col gap-6 md:w-1/2'>
                  <p className='text-myOrange flex items-center gap-2 text-lg font-bold tracking-wider'>
                    <span className='bg-myOrange h-[2px] w-10'></span>
                    Learning Model
                  </p>
                  <h1
                    className={`text-4xl font-bold leading-[2.8rem] tracking-wide md:text-4xl md:leading-[3rem]`}
                  >
                    Understanding about our learning model
                  </h1>
                  <p className='text-lg tracking-wider'>
                    The &quot;Integrate, Innovate, and Inspire&quot; learning
                    model seamlessly combines diverse disciplines, innovative
                    teaching methods, and a motivational environment to foster a
                    comprehensive understanding and inspire lifelong learning in
                    an ever-evolving world.
                  </p>
                  <ul className='flex flex-col gap-5 text-xl tracking-wide'>
                    <li className='flex items-center gap-2'>
                      <TiTick className='text-3xl' />
                      Combines diverse disciplines
                    </li>
                    <li className='flex items-center gap-2'>
                      <TiTick className='text-3xl' />
                      Utilizes innovative teaching
                    </li>
                    <li className='flex items-center gap-2'>
                      <TiTick className='text-3xl' />
                      Sparks enthusiasm for learning
                    </li>
                  </ul>
                </div>
                <div className='border-dark image-frame-shadow block w-fit border-2 md:hidden'>
                  <Image
                    src={LearningModel}
                    alt='about_robo'
                    sizes='100vw'
                    width={400}
                    height={450}
                  />
                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>
    </>
  )
}
