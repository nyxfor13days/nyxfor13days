import { Link } from "@nextui-org/link";

import ToggleTheme from "./ToggleTheme";

export default function Header() {
  return (
    <header className="mt-12 flex items-center justify-between gap-4">
      <Link
        href="/"
        color="foreground"
      >
        <h1 className="text-sm font-bold">Harsh Sandhu</h1>
      </Link>

      <ToggleTheme />
    </header>
  );
}
