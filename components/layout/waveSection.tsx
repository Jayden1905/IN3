import React, { ReactNode } from "react";
import Container from "./container";

export default function WaveSection({ children }: { children: ReactNode }) {
  return (
    <section>
      <Container className="relative">
        <div className="bg-primary">
          <svg
            viewBox="0 0 1440 143"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2_8)">
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
          <div className="pb-0 md:pb-20">{children}</div>
          <svg
            width="1440"
            height="142"
            viewBox="0 0 1440 142"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 111L60 95C120 79 240 47 360 25.7C480 3.99999 600 -6 720 4.3C840 15 960 47 1080 57.7C1200 68 1320 58 1380 52.3L1440 47V143H1380C1320 143 1200 143 1080 143C960 143 840 143 720 143C600 143 480 143 360 143C240 143 120 143 60 143H0V111Z"
              fill="#E4E4E4"
            />
          </svg>
        </div>
      </Container>
    </section>
  );
}
