import SectionWrapper from "@/components/SectionWrapper";
import Sidebar from "@/components/Sidebar";
import SocialButtons from "@/components/SocialButtons";
import { Link } from "@nextui-org/link";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

import Form from "./_components/Form";

export default function page() {
  return (
    <main className="grid grid-cols-4 place-content-start place-items-start gap-4">
      <div className="w-full space-y-6 col-span-4 lg:col-span-3">
        <SectionWrapper title="Contact">
          <article className="col-span-3 space-y-4">
            <Form />
          </article>
        </SectionWrapper>

        <SectionWrapper title="Links">
          <article className="col-span-3 grid md:grid-cols-2 gap-2">
            <Link
              isExternal
              size="sm"
              color="foreground"
              href="emailto:nyxfor13days@gmail.com"
              className="flex items-center gap-2"
            >
              <EnvelopeClosedIcon className="icon" />
              <span>nyxfor13days@gmail.com</span>
            </Link>

            <SocialButtons />
          </article>
        </SectionWrapper>
      </div>

      <Sidebar />
    </main>
  );
}
