import Container from "@/components/layout/container";
import { headerFont } from "@/utils/fonts";
import MyButton from "@/components/ui/myButton";
import ProgrammingSvg from "@/components/svgs/programmingSvg";
import { FaPlay } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";

export default function HeroSection({}) {
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
    </>
  );
}
