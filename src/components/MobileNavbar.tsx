import { navItems } from "@/lib/constants";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function MobileNavbar() {
  return (
    <Popover
      placement="bottom-start"
      className="md:hidden"
    >
      <PopoverTrigger>
        <Button
          isIconOnly
          variant="light"
        >
          <HamburgerMenuIcon className="icon" />
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <ul className="py-6 px-4 flex flex-col gap-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.url}
                color="foreground"
                className="text-sm lowercase"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
