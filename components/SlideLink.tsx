import Link from "next/link";

interface SlideLinkProps {
  label: string;
  link: string;
  icon: React.ReactNode;
}

export function SlideLink({ label, link, icon }: SlideLinkProps) {
  return (
    <Link href={link}>
      <div className="group relative flex items-center justify-between gap-2 overflow-hidden rounded-md border border-slate-900 bg-slate-50 px-4 py-1.5 dark:border-slate-50">
        <div className="absolute left-0 top-0 z-0 h-full w-0 bg-zinc-950 transition-all duration-500 group-hover:w-full" />
        <div className="z-20">
          <p className="duration-50 font-semibold text-zinc-900 transition-all delay-200 hover:delay-[20ms] group-hover:text-slate-50">
            {label}
          </p>
        </div>

        <div className="z-20">{icon}</div>
      </div>
    </Link>
  );
}