import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  year: string;
  description: string;
  image: string;
  link?: string;
}

export function ProjectCard({ title, year, description, image, link }: ProjectCardProps) {
  return (
    <Link href={link ?? ""} className="w-full">
      <div className="grid grid-cols-[2fr_3fr] gap-5 w-full">
        <div className="flex justify-center">
          <Image
            src={image}
            width={400}
            height={400}
            alt="project-card"
            className="mb-1 h-full rounded shadow"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-xl">
              {title}
            </p>
            <p>{year}</p>
          </div>
          <p className="text-md font-light text-grey text-justify">{description}</p>
        </div>
      </div>
    </Link>
  );
}
