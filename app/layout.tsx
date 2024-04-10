import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oronium Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className + " flex h-screen w-full flex-col"}>
        <Header />
        <div className="flex w-full flex-grow">
          <Navbar />
          <div className="flex-grow px-6 py-2">{children}</div>
        </div>
      </body>
    </html>
  );
}
