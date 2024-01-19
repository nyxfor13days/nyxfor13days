"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";

export default function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  function handleTheme() {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      isIconOnly
      size="sm"
      variant="light"
      onClick={handleTheme}
    >
      {theme === "dark" ? <MoonIcon className="icon" /> : <SunIcon className="icon" />}
    </Button>
  );
}
