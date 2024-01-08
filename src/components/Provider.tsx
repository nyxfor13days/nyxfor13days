"use client";

import { NextUIProvider } from "@nextui-org/react";

export default function Provider({ children }: React.PropsWithChildren) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
