import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function SocialButtons() {
  return (
    <div className="flex items-center gap-8">
      <Link
        isExternal
        href="https://www.linkedin.com/in/nyxfor13days"
      >
        <Button
          isIconOnly
          size="sm"
          color="primary"
        >
          <LinkedInLogoIcon className="icon" />
        </Button>
      </Link>

      <Link
        isExternal
        href="https://www.github.com/nyxfor13days"
      >
        <Button
          isIconOnly
          size="sm"
          color="primary"
        >
          <GitHubLogoIcon className="icon" />
        </Button>
      </Link>

      <Link
        isExternal
        href="https://www.instagram.com/nyxfor13days"
      >
        <Button
          isIconOnly
          size="sm"
          color="primary"
        >
          <InstagramLogoIcon className="icon" />
        </Button>
      </Link>
    </div>
  );
}
