import { WorkSection } from "@/components/WorkSection";

export default function About() {
  return (
    <div className="flex h-full justify-center">
      <div className="flex max-w-[40rem] grow flex-col gap-8 pb-16 font-light">
        <h3 className="text-xl font-medium">Background</h3>

        <WorkSection
          link="https://www.kcl.ac.uk/"
          imageUrl="/kcl_square.png"
          dates="2021 - Present"
        >
          <p>King&apos;s College London</p>
          <p>
            Bachelor of Science with Honours (BSc Hons), in Computer Science, with a Year in
            Industry
          </p>
        </WorkSection>

        <WorkSection link="https://tryterra.co" imageUrl="/terra.jpg" dates="July 2023 - July 2024">
          <p>Terra (YC W21), Full-stack engineer</p>
          <ul className="ml-5 list-disc">
            <li>
              <p>
                Product lead for developer dashboard, implementing payment infrastructure and
                product analytics
              </p>
            </li>
            <li>
              <p>Customer success agent managing client growth</p>
            </li>
            <li>
              <p>API development and integrations</p>
            </li>
          </ul>
        </WorkSection>

        <h3 className="text-xl font-medium">Projects</h3>
        <p>TBD...</p>
      </div>
    </div>
  );
}
