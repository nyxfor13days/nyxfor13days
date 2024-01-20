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
          title="social-media-buttons"
          aria-label="social-media"
          aria-labelledby="social-media-buttons"
          role="button"
          size="sm"
          color="primary"
        >
          <LinkedInLogoIcon className="icon" />
          <span className="sr-only">LinkedIn</span>
        </Button>
      </Link>

      <Link
        isExternal
        href="https://www.github.com/nyxfor13days"
      >
        <Button
          isIconOnly
          title="social-media-buttons"
          aria-label="social-media"
          aria-labelledby="social-media-buttons"
          role="button"
          size="sm"
          color="primary"
        >
          <GitHubLogoIcon className="icon" />
          <span className="sr-only">GitHub</span>
        </Button>
      </Link>

      <Link
        isExternal
        href="https://www.instagram.com/nyxfor13days"
      >
        <Button
          isIconOnly
          title="social-media-buttons"
          aria-label="social-media"
          aria-labelledby="social-media-buttons"
          role="button"
          size="sm"
          color="primary"
        >
          <InstagramLogoIcon className="icon" />
          <span className="sr-only">Instagram</span>
        </Button>
      </Link>
    </div>
  );
}
