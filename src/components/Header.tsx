import { Link } from "@nextui-org/link";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 px-4 h-16 grid grid-cols-2 place-content-center gap-4 bg-content1/25 text-content1-foreground backdrop-blur z-40">
      <div className="tracking-tighter font-bold">
        <Link
          href="/"
          color="foreground"
        >
          Harsh Sandhu
        </Link>
      </div>
    </header>
  );
}
