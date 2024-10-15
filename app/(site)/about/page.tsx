import { GitHubIcon, ItchIOIcon, LinkedInIcon, LinkIcon } from "@/components/Icons";
import { ProjectCard } from "@/components/ProjectCard";
import { SlideLink } from "@/components/SlideLink";
import { WorkSection } from "@/components/WorkSection";

export default function About() {
  return (
    <div className="flex h-full justify-center">
      <div className="flex max-w-[50rem] grow flex-col gap-8 pb-16 font-light">
        <h3 className="text-xl font-medium">Background</h3>

        <WorkSection
          link="https://www.kcl.ac.uk/"
          imageUrl="/kcl_square.png"
          dates="2021 - Present"
        >
          <p>King&apos;s College London</p>
          <p className="text-grey">
            Bachelor of Science with Honours (BSc Hons), in Computer Science, with a Year in
            Industry
          </p>
        </WorkSection>

        <WorkSection link="https://tryterra.co" imageUrl="/terra.jpg" dates="July 2023 - July 2024">
          <p>Terra (YC W21), Full-stack engineer</p>
          <ul className="ml-5 list-disc text-grey">
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

        <h3 className="text-xl font-medium mt-3">Links</h3>
        <div className="flex gap-4 max-sm:flex-col w-full">
          <SlideLink
            label="Github"
            link="https://github.com/ChandruSu"
            icon={
              <GitHubIcon className="duration-50 shrink-0 brightness-0 transition-all delay-200 group-hover:brightness-100" />
            }
            className="grow"
          />
          <SlideLink
            label="Itch.io"
            link="https://chandymandy.itch.io"
            icon={
              <ItchIOIcon className="duration-50 shrink-0 brightness-0 transition-all delay-200 group-hover:brightness-100" />
            }
            className="grow"
          />

          <SlideLink
            label="LinkedIn"
            link="https://chandymandy.itch.io"
            icon={
              <LinkedInIcon className="duration-50 shrink-0 brightness-0 transition-all delay-200 group-hover:brightness-100" />
            }
            className="grow"
          />
        </div>

        <h3 className="text-xl font-medium mt-3">Projects</h3>
        <div className="flex flex-col w-full items-center gap-8">
          <ProjectCard
            title="Cohesive, Groupon on Stellar"
            year="2024"
            link="https://github.com/ChandruSu/stellar-hack-24"
            description="Hackathon submission for EasyA x Stellar Meridian 2024. A decentralised* platform and interface for businesses to provide groupon deals to consumers and to attain achieve revenue"
            image="/projects/cohesiv_thumbnail.png"
          />
          <ProjectCard
            title="Helium Interpreter"
            year="2022"
            link="https://github.com/ChandruSu/helium-interpreter"
            description="Custom programming language interpreter written in C - dynamically typed, register-machine bytecode vm"
            image="/projects/helium_thumbnail.gif"
          />
          <ProjectCard
            title="Polygarden.io"
            year="2022"
            link="https://polygarden-site.vercel.app/"
            description="Procedurally generated 3D NFT marketplace where 3D artists can create collections using Blender3D's geometry pipeline and mint them on the Polygon chain"
            image="/projects/polygarden_thumbnail.png"
          />
          <ProjectCard
            title="OpenCL Raytracing Engine"
            year="2022"
            link="https://github.com/ChandruSu/opencl-raytracer"
            description="A simple raytracing engine written in C++ using OpenCL for GPU accelerated parallel compute and OpenGL for presentation"
            image="/projects/raytrace_thumbnail.png"
          />

          <ProjectCard
            title="S.C.R.A.B"
            year="2021"
            link="https://chandymandy.itch.io/scrab"
            description="Sci-fi dungeon crawler built in Unity Engine 3D with retro low-poly aesthetics. Submission for Brackeys Game Jam 2021.2"
            image="/projects/scrab_thumbnail.png"
          />
        </div>
      </div>
    </div>
  );
}
