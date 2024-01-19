"use client";

import { Button, Link } from "@nextui-org/react";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function SocialButtons() {
  return (
    <div className="flex items-center gap-4">
      <Link
        isExternal
        href="https://www.instagram.com/nyxfor13days"
      >
        <Button isIconOnly>
          <InstagramLogoIcon className="icon" />
        </Button>
      </Link>

      <Link
        isExternal
        href="https://www.linkedin.com/in/nyxfor13days"
      >
        <Button isIconOnly>
          <LinkedInLogoIcon className="icon" />
        </Button>
      </Link>

      <Link
        isExternal
        href="https://www.github.com/nyxfor13days"
      >
        <Button isIconOnly>
          <GitHubLogoIcon className="icon" />
        </Button>
      </Link>
    </div>
  );
}
