"use client";

import { ThemeProvider } from "next-themes";

import { NextUIProvider } from "@nextui-org/react";

export default function Provider({ children }: React.PropsWithChildren) {
  return (
    <NextUIProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
      >
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}
