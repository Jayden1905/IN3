import Nav from "@/components/nav/nav";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { token } from "@/utils/sanity/fetch";

export const metadata: Metadata = {
  title: "IN3",
  description: "Robitcs and Coding Educaton for kids.",
  keywords: ["robotics", "coding", "education", "kids"],
};

const PreviewProvider = dynamic(
  () => import("../../components/sanity/previwProvider")
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main>
        {draftMode().isEnabled ? (
          <PreviewProvider token={token}>{children}</PreviewProvider>
        ) : (
          children
        )}
      </main>
    </>
  );
}
