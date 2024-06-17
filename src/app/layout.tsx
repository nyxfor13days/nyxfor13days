import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import "./globals.css";
import RootProvider from "@/components/RootProvider";
import { Toaster } from "@/components/ui/Sonner";
import { cn } from "@/lib/utils";
import { sansFont, serifFont } from "@/fonts";

export const metadata: Metadata = {
  title: "Harsh Sandhu",
  description: "Generated by create next app",
};

interface Props extends PropsWithChildren { }

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body className={cn(sansFont.variable, serifFont.variable)}>
        <RootProvider>
          {children}
          <Toaster richColors className="print:hidden" />
        </RootProvider>
      </body>
    </html>
  );
}
