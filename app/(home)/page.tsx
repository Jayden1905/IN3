import Container from "@/components/layout/container";
import ProgrammingSvg from "@/components/svgs/programmingSvg";

export default async function Home() {
  return (
    <>
      <Container>
        <ProgrammingSvg />
        <h1>hello from main page</h1>
      </Container>
    </>
  );
}
