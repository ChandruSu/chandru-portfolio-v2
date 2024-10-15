import Image from "next/image";

interface WorkSectionProps {
  link: string;
  imageUrl: string;
  children: React.ReactNode;
  dates: string;
}

export function WorkSection({ link, imageUrl, children, dates }: WorkSectionProps) {
  return (
    <div className="grid grid-cols-[6rem_auto] gap-8 max-sm:grid-cols-1 max-sm:justify-items-center">
      <a href={link}>
        <Image
          src={imageUrl}
          width="200"
          height="200"
          alt="work-image"
          className="aspect-square max-w-[6rem] rounded"
        />
      </a>
      <div className="flex w-full flex-col gap-4 text-md">
        {children}
        <p className="text-right text-sm">{dates}</p>
      </div>
    </div>
  );
}
