import { navItems } from "@/lib/constants";
import { Link } from "@nextui-org/link";

import MobileNavbar from "./MobileNavbar";
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

      <nav className="flex items-center gap-4">
        <ul className="hidden md:flex items-center gap-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              color="foreground"
              className="text-sm lowercase"
            >
              <li>{item.label}</li>
            </Link>
          ))}
        </ul>

        <MobileNavbar />

        <ToggleTheme />
      </nav>
    </header>
  );
}
