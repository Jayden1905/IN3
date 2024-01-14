import Container from "@/components/layout/container";
import ProgrammingSvg from "@/components/svgs/programmingSvg";
import { headerFont } from "@/utils/fonts";
import { IoBookOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import MyButton from "@/components/ui/myButton";
import WaveSection from "@/components/layout/waveSection";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Container className="mb-14">
        <div className="relative flex justify-center gap-10">
          <div className="flex w-full flex-col gap-14 pt-10 md:w-1/2">
            <h1
              className={`select-none text-4xl font-bold leading-[3rem] [word-spacing:-15px] sm:text-6xl sm:leading-[4.5rem] md:tracking-wide ${headerFont}`}
            >
              Fun,reliable <br /> and
              <span className="text-myOrange"> quality</span> <br /> education
            </h1>

            <p className="text-xl tracking-wide">
              Hold incredible events, share knowledge, build
              <br className="hidden sm:block" /> and grow your community, create
              opportunity
            </p>
            <div className="flex gap-5">
              <MyButton label="Start Learning" icon={<IoBookOutline />} />
              <MyButton icon={<FaPlay />} className="bg-teal-700" />
            </div>
          </div>
          <ProgrammingSvg className="hidden md:block" />
        </div>
      </Container>
      <WaveSection>
        <div className="flex h-full w-full flex-col gap-10 px-10 md:flex-row md:px-24">
          <div className="border-dark flex flex-col justify-center border-r-0 border-opacity-20 md:w-1/2 md:border-r">
            <div className="mb-6 md:mb-0">
              <h1 className="pb-10 text-3xl font-bold leading-10 tracking-wide md:text-5xl md:leading-[3.5rem]">
                Ready to learn <br /> robotics and coding?
              </h1>
              <Link
                href={"#"}
                className="hover:text-primary px-2 py-3 text-xl text-teal-700 underline underline-offset-[15px] transition-all duration-150 ease-in-out hover:bg-teal-700 hover:no-underline"
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
        </div>
      </WaveSection>
    </>
  );
}
