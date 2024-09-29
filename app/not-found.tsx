import Link from "next/link";

export default function Page404() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="mb-12 flex flex-col items-center gap-5">
        <p className="text-5xl font-light text-dark dark:text-light">404</p>
        <p className="text-xl font-light text-dark dark:text-light">
          This page does not exist :(
        </p>
        <Link href="/" className="link-line">
          <p>Return to home</p>
        </Link>
      </div>
    </div>
  );
}
