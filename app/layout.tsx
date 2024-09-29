import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import RootProviders from "./providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Chandru Suresh",
  description:
    "The portfolio site of Chandru Suresh; British software engineer and computer programmer",
  keywords: "developer,portfolio,software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} cursor-override-dark antialiased dark:cursor-override`}
      >
        <RootProviders>
          <div className="flex h-0 min-h-screen w-full flex-col overflow-x-hidden bg-light p-0 dark:bg-dark">
            <Navbar />
            <main className="grow p-8">{children}</main>
            <Footer />
          </div>
        </RootProviders>
      </body>
    </html>
  );
}
