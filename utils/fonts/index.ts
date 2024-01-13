import { Lato, Montserrat_Alternates, Space_Mono } from "next/font/google";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const normalFont: string = lato.className;

export const headerFont: string = spaceMono.className;
