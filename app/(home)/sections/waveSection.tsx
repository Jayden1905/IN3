import React from "react";
import Link from "next/link";
import { headerFont } from "@/utils/fonts";

export default function WaveSection() {
  return (
    <section>
      <div className="bg-primary">
        <svg
          viewBox="0 0 1440 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2_8)">
            <path
              d="M0 110.886L60 94.8864C120 78.8864 240 46.8863 360 25.5863C480 3.88635 600 -6.11364 720 4.18636C840 14.8864 960 46.8863 1080 57.5863C1200 67.8863 1320 57.8864 1380 52.1864L1440 46.8864V142.886H1380C1320 142.886 1200 142.886 1080 142.886C960 142.886 840 142.886 720 142.886C600 142.886 480 142.886 360 142.886C240 142.886 120 142.886 60 142.886H0V110.886Z"
              fill="#F4F4F5"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_8">
              <rect
                width="1440"
                height="142.773"
                fill="white"
                transform="translate(0 0.11364)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="relative overflow-hidden bg-zinc-100">
        <div className="pb-0 md:pb-32">
          <div className="flex h-full w-full flex-col gap-10 px-10 md:flex-row md:px-24">
            <div className="border-dark flex flex-col justify-center border-r-0 border-opacity-20 md:w-1/2 md:border-r">
              <div className="mb-6 md:mb-0">
                <h1
                  className={`${headerFont} pb-10 text-4xl font-bold leading-[3rem] tracking-wide [word-spacing:-10px] md:text-5xl md:leading-[3.5rem]`}
                >
                  Ready to learn <br />
                  robotics and coding?
                </h1>
                <Link
                  href={"#featured-courses"}
                  className="hover:text-primary px-2 py-3 text-xl text-teal-700 underline underline-offset-[15px] transition-all duration-150 ease-in-out hover:bg-teal-700 hover:no-underline"
                >
                  Learn more
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center md:w-1/2">
              <p className="text-xl tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis voluptates sequi consequuntur facere, repudiandae
                quo? dolore necessitatibus delectus reprehenderit consequuntur
                quos?
              </p>
            </div>
          </div>
          <section id="featured-courses"></section>
        </div>
        <svg
          width="1600"
          height="142"
          viewBox="0 0 1600 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 111L66.6667 95C133.333 79 266.667 47 400 25.7C533.333 3.99999 666.667 -6 800 4.3C933.333 15 1066.67 47 1200 57.7C1333.33 68 1466.67 58 1533.33 52.3L1600 47V143H1533.33C1466.67 143 1333.33 143 1200 143C1066.67 143 933.333 143 800 143C666.667 143 533.333 143 400 143C266.667 143 133.333 143 66.6667 143H0V111Z"
            fill="#E4E4E4"
          />
        </svg>
      </div>
    </section>
  );
}
