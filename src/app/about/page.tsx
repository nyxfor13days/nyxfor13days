import SectionWrapper from "@/components/SectionWrapper";
import Sidebar from "@/components/Sidebar";

import Education from "./_components/Education";
import WorkExperience from "./_components/WorkExperience";
import WhatDoIDo from "./_content/what-do-i-do.mdx";
import WhoAmI from "./_content/who-am-i.mdx";

export default function page() {
  return (
    <main className="grid grid-cols-4 place-content-start place-items-start gap-4">
      <div className="space-y-6 col-span-4 lg:col-span-3">
        <SectionWrapper title="Who am I">
          <article className="col-span-3 space-y-4">
            <WhoAmI />
          </article>
        </SectionWrapper>

        <SectionWrapper title="What do I do">
          <article className="col-span-3 space-y-4">
            <WhatDoIDo />
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
