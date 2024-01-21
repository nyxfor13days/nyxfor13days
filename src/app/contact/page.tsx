import SectionWrapper from "@/components/SectionWrapper";
import Sidebar from "@/components/Sidebar";

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
      </div>

      <Sidebar />
    </main>
  );
}
