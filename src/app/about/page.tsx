import SectionWrapper from "@/components/SectionWrapper";
import { Link } from "@nextui-org/link";

import Education from "./_components/Education";
import Sidebar from "./_components/Sidebar";
import WorkExperience from "./_components/WorkExperience";

export default function page() {
  return (
    <main className="grid grid-cols-4 place-content-start place-items-start gap-4">
      <div className="space-y-6 col-span-4 lg:col-span-3">
        <SectionWrapper title="Who am I">
          <article className="col-span-3 space-y-4">
            <p>
              A god loving human who found his path through the good and bad experiences in life. From not knowing my
              mission in life to helping people and providing for the people around me, I am trying to make the best out
              of the life I have been given.
            </p>

            <p>
              I follow my passion and love what I do. The purpose of life is not to always do what you love but to love
              what you do. It gives you the motivation to do what needs to be done.
            </p>
          </article>
        </SectionWrapper>

        <SectionWrapper title="What do I do">
          <article className="col-span-3 space-y-4">
            <p>
              Looking at what I do for work I can say that I love solving problems and specially the ones which
              challenge me the most. I am a fullstack engineer, mostly focusing on the interface and experience for the
              users. Experienced in providing smooth and easy usability for the end users.
            </p>

            <p>
              Currently I am working at{" "}
              <Link
                isExternal
                showAnchorIcon
                href="https://www.linkedin.com/company/dhan-ai/mycompany/"
              >
                Dhan Technology Labs India Private Limited
              </Link>{" "}
              as a frontend senior engineer since November 2022. My responsibility is to design and develop interfaces
              for products and content management systems for businesses. I work with extremely talented individuals to
              deliver the best product as expected by our clients. The company focuses on it&apos;s own products and
              providing services to other clients.
            </p>
          </article>
        </SectionWrapper>

        <SectionWrapper title="Experience">
          <div className="col-span-3 space-y-4">
            <WorkExperience />
          </div>
        </SectionWrapper>

        <SectionWrapper title="Education">
          <div className="col-span-3 space-y-4">
            <Education />
          </div>
        </SectionWrapper>
      </div>

      <Sidebar />
    </main>
  );
}
