"use client";
import Container from "@/components/layout/container";
import AboutSection from "@/components/sections/aboutSection";
import FeaturedCourses from "@/components/sections/featuredCourses";
import PotentialSection from "@/components/sections/potentialSection";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { TiTick } from "react-icons/ti";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Container className="mb-20">
        <section className="flex flex-col gap-4">
          <h1
            style={{ wordSpacing: "0.3rem" }}
            className={`font-sfpro text-center text-5xl font-bold leading-[3.5rem] md:text-8xl`}
          >
            Become The Best At <span className="text-myOrange">Coding.</span>
          </h1>
          <p className="mt-4 text-center text-2xl tracking-wide">
            Upgrade your education with IN3.
          </p>
          <AspectRatio ratio={4 / 2} className="mt-5">
            <Image
              src="/kid_with_vr.jpeg"
              alt="Image"
              className="rounded-md object-cover"
              fill
            />
          </AspectRatio>
        </section>
      </Container>
      <div className="bg-primary mb-16 py-16">
        <Container className="flex h-full w-full flex-col gap-10 md:flex-row">
          <div className="border-myBlack flex flex-col justify-center border-r-0 border-opacity-20 md:w-1/2 md:border-r">
            <div className="mb-6 md:mb-0">
              <h1
                className={`pb-10 text-5xl font-bold leading-[3rem] tracking-wider md:text-5xl md:leading-[3.5rem]`}
              >
                Understanding our <br /> learning{" "}
                <span className="text-myOrange">model.</span>
              </h1>
              <Link
                href={"#featured-courses"}
                className="hover:text-primary text-myOrange hover:bg-myOrange px-2 py-3 text-xl underline underline-offset-[15px] transition-all duration-150 ease-in-out hover:no-underline"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center md:w-1/2">
            <p className="mb-6 text-lg tracking-wider">
              The &quot;Integrate, Innovate, and Inspire&quot; learning model
              seamlessly combines diverse disciplines, innovative teaching
              methods, and a motivational environment to foster a comprehensive
              understanding and inspire lifelong learning in an ever-evolving
              world.
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
        </Container>
        <section id="featured-courses"></section>
      </div>
      <FeaturedCourses />
      <AboutSection />
      <PotentialSection />
    </>
  );
}
