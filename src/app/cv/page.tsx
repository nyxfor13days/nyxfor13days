import SectionWrapper from "@/components/SectionWrapper";
import SocialButtons from "@/components/SocialButtons";
import ToggleTheme from "@/components/ToggleTheme";
import { about, certifications, education, experience, skills } from "@/lib/constants";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { DotFilledIcon } from "@radix-ui/react-icons";

export default function page() {
  return (
    <main className="space-y-12">
      <header className="mt-12 flex items-center justify-between gap-4">
        <Link
          href="/"
          color="foreground"
        >
          <h1 className="text-sm font-bold">Harsh Sandhu</h1>08
        </Link>

        <ToggleTheme />
      </header>

      <section className="max-w-4xl space-y-4">
        <p className="text-5xl font-bold lowercase">
          UX Designer, Fullstack Developer, Researcher, Strategist and Entrepreneur.
        </p>

        <SocialButtons />
      </section>

      <Divider />

      <SectionWrapper title="About">
        <div className="col-span-3 space-y-8">
          {about.map((item, index) => (
            <div
              key={index}
              className="grid grid-rows-auto md:grid-cols-3 gap-4"
            >
              <span className="headings">{item.title}</span>
              <p className="col-span-2">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <Divider />

      <SectionWrapper title="Skills">
        <div className="col-span-3 space-y-8">
          {skills.map(({ title, skills }, index) => (
            <div
              key={index}
              className="grid grid-rows-auto md:grid-cols-3 gap-4"
            >
              <span className="headings">{title}</span>

              <div className="col-span-2">
                <p className="flex items-center gap-0.5">
                  <span>Fluent</span>
                  {skills.fluent.map((skill) => (
                    <span
                      key={skill}
                      className="text-foreground/50 flex items-center"
                    >
                      <DotFilledIcon className="icon" />
                      {skill}
                    </span>
                  ))}
                </p>
                {skills.learning && (
                  <p className="flex items-center gap-0.5">
                    <span>Learning</span>
                    {skills.learning.map((skill) => (
                      <span
                        key={skill}
                        className="text-foreground/50 flex items-center"
                      >
                        <DotFilledIcon className="icon" />
                        {skill}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <Divider />

      <SectionWrapper title="Work Experience">
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-y-6 gap-x-4">
          {experience.map((item, index) => (
            <div
              key={index}
              className="text-xs md:text-sm lg:text-base"
            >
              <span>{item.timeline}</span>
              <p className="font-bold uppercase text-pretty">{item.companyName}</p>
              <p>
                {item.position} - {item.type}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <Divider />

      <SectionWrapper title="Education">
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-y-6 gap-x-4">
          {education.map((item, index) => (
            <div
              key={index}
              className="text-xs md:text-sm lg:text-base"
            >
              <span>{item.timeline}</span>
              <p className="font-bold uppercase text-pretty">{item.institute}</p>
              <p className="ordinal">{item.degree}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <Divider />

      <SectionWrapper title="Licenses and Certifications">
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-y-6 gap-x-4">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="text-xs md:text-sm lg:text-base"
            >
              <span>Issued {item.issued}</span>
              <p className="font-bold uppercase text-pretty">{item.title}</p>
              <Link
                isExternal
                showAnchorIcon
                href={item.credentialURL}
                color="foreground"
                className="text-xs md:text-sm lg:text-base"
              >
                {item.provider}
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
