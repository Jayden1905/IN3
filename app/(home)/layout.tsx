import Nav from "@/components/nav/nav";
import type { Metadata } from "next";

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
    <>
      <Nav />
      <main className="relative top-8 md:top-20">{children}</main>
    </>
  );
}
