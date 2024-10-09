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
    <Link href={link ?? ""}>
      <div className="flex max-w-[30rem] flex-col gap-1">
        <div className="flex justify-center">
          <Image
            src={image}
            width={200}
            height={200}
            alt="project-card"
            className="mb-1 w-full rounded"
          />
        </div>
        <p className="text-lg">
          {title} <span className="text-grey">{year}</span>
        </p>
        <p className="text-sm font-light">{description}</p>
      </div>
    </Link>
  );
}
