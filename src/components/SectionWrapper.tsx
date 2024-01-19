import { PropsWithChildren } from "react";

import { Divider } from "@nextui-org/divider";

interface Props extends PropsWithChildren {
  title: string;
}

export default function SectionWrapper({ title, children }: Props) {
  const sectionClassNames = "py-8 grid grid-rows-auto md:grid-cols-3 lg:grid-cols-4 gap-4";

  return (
    <section className={sectionClassNames}>
      <div className="space-y-4">
        <h2 className="headings text-xl">{title}</h2>
        <Divider className="lg:hidden" />
      </div>

      {children}
    </section>
  );
}
