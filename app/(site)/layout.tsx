import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-light p-0 transition-colors duration-200 dark:bg-dark">
      <Navbar />
      <main className="grow p-8">{children}</main>
      <Footer />
    </div>
  );
}
