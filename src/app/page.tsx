import Link from "next/link";

import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";

export default function Home() {
  return (
    <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-6 w-full md:max-w-4xl">
      <h2 className="text-3xl lg:text-5xl">
        A fullstack engineer focusing on accessible interfaces and experiences for the user.
      </h2>

      <p>
        Working remotely from{" "}
        <Link
          target="_blank"
          href="https://maps.app.goo.gl/2rPBFUCxYBqC9FTq5"
          className="hover:text-foreground/75 transition-colors"
        >
          Punjab, India
        </Link>
        .
      </p>

      <div className="flex items-center gap-4">
        <Link href="/cv">
          <Button
            size="sm"
            variant="solid"
            color="primary"
          >
            CV
          </Button>
        </Link>
        <Link href="/about">
          <Button
            size="sm"
            variant="solid"
            color="primary"
          >
            About Me
          </Button>
        </Link>
        <Link href="/contact">
          <Button
            size="sm"
            variant="solid"
            color="primary"
          >
            Contact
          </Button>
        </Link>
      </div>

      <Divider />

      <div className="space-y-2">
        <h3 className="headings">Recent Posts</h3>
        <div className="p-4 flex items-center gap-1 bg-content2 text-content2-foreground/75">
          <WrenchScrewdriverIcon className="icon" />
          <span className="text-sm lowercase">Blog is still under construction...</span>
          <WrenchScrewdriverIcon className="icon" />
        </div>
      </div>
    </main>
  );
}
