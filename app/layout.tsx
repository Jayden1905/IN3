import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IN3",
  description: "Robitcs and Coding Educaton for kids.",
  keywords: ["robotics", "coding", "education", "kids"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary text-dark`}>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
