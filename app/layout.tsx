import type { Metadata } from "next";
import "./globals.css";
import { lato } from "@/utils/fonts";

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
      <body className={`${lato.className} bg-primary text-dark`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
