import { ArrowRightIcon, PaperClipIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";

export default function NotFound() {
  return (
    <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:max-w-3xl space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl md:text-5xl">Sorry... We don&apos;t have what you are looking for</h2>
        <p>You have stumbled upon a rare sight.</p>
      </div>

      <Divider />

      <div className="flex items-center gap-6">
        <Link href="/">
          <Button
            variant="solid"
            color="primary"
          >
            <span>Go Home</span>
            <ArrowRightIcon className="icon" />
          </Button>
        </Link>

        <Link href="/cv">
          <Button variant="bordered">
            <PaperClipIcon className="icon" />
            <span>View CV</span>
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
