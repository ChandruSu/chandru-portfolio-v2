import { GitHubIcon, ItchIOIcon, LinkedInIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="flex items-center justify-center border-t border-dark border-opacity-10 p-3 dark:border-light dark:border-opacity-10 max-sm:px-8 max-sm:py-6">
      <div className="w-full items-center justify-center gap-4 max-sm:grid max-sm:grid-cols-2 max-sm:items-start max-sm:justify-items-center sm:flex">
        <a
          target="_blank"
          href="https://github.com/ChandruSu"
          className="flex items-center gap-4 text-xs font-light transition-all duration-200 hover:-translate-y-0.5"
        >
          <GitHubIcon className="shrink-0 brightness-0 dark:brightness-100" />
          <p className="sm:hidden">github</p>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/chandru-suresh-nair/"
          className="flex items-center gap-4 text-xs font-light transition-all duration-200 hover:-translate-y-0.5"
        >
          <LinkedInIcon className="shrink-0 brightness-0 dark:brightness-100" />
          <p className="sm:hidden">linkedin</p>
        </a>
        <a
          target="_blank"
          href="https://chandymandy.itch.io"
          className="flex items-center gap-4 text-xs font-light transition-all duration-200 hover:-translate-y-0.5"
        >
          <ItchIOIcon className="shrink-0 brightness-0 dark:brightness-100" />
          <p className="sm:hidden">itch.io</p>
        </a>
      </div>
    </footer>
  );
}
