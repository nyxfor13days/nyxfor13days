import type { Metadata } from "next";
import "./globals.css";

import { Montserrat } from "next/font/google";
import { PropsWithChildren } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Provider from "@/components/Provider";
import { cn } from "@/lib/utils";
import { Divider } from "@nextui-org/divider";
import { Analytics } from "@vercel/analytics/react";

const font = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harsh Sandhu - UX Designer and Fullstack Developer.",
  description: "A UX Designer and Fullstack Developer in daytime and a researchers and entrepreneur in night time.",
};

interface Props extends PropsWithChildren {}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={cn("container", font.className)}>
        <Provider>
          <Header />
          {children}
          <Divider />
          <Footer />
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
