import Container from "@/components/layout/container";
import ProgrammingSvg from "@/components/svgs/programmingSvg";
import { spaceMono } from "@/utils/fonts";

export default async function Home() {
  return (
    <>
      <Container>
        <h1
          className={`select-none text-7xl font-bold ${spaceMono.className} leading-[6rem] tracking-wide`}
        >
          Learn Coding With <br /> Fun Projects And Activities
        </h1>
        <ProgrammingSvg />
      </Container>
    </>
  );
}
