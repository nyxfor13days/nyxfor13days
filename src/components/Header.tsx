import { Link } from "@nextui-org/link";

import ToggleTheme from "./ToggleTheme";

export default function Header() {
  return (
    <header className="my-12 flex items-center justify-between gap-4">
      <Link
        href="/"
        color="foreground"
      >
        <h1 className="font-bold">Harsh Sandhu</h1>
      </Link>

      <ToggleTheme />
    </header>
  );
}
