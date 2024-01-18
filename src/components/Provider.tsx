"use client";

import { ThemeProvider } from "next-themes";
import { useRouter } from "next/navigation";

import { NextUIProvider } from "@nextui-org/react";

export default function Provider({ children }: React.PropsWithChildren) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
      >
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}
