import WaveSection from "@/app/(home)/sections/waveSection";
import HeroSection from "./sections/heroSection";
import AboutSection from "./sections/aboutSection";
import FeaturedCourses from "./sections/featuredCourses";
import PotentialSection from "./sections/potentialSection";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <WaveSection />
      <FeaturedCourses />
      <AboutSection />
      <PotentialSection />
    </>
  );
}
