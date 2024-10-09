import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import RootProviders from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Chandru Suresh",
  description:
    "The portfolio site of Chandru Suresh; British software engineer and computer programmer",
  keywords: "developer,portfolio,software",
  openGraph: {
    title: "Chandru Suresh",
    description:
      "The portfolio site of Chandru Suresh; British software engineer and computer programmer",
    url: "https://chandru-su.com",
    siteName: "Chandru Suresh Portfolio",
    type: "website",
    images: [
      {
        url: "https://chandru-su.com/metaimage.png",
        secureUrl: "https://chandru-su.com/metaimage.png",
        width: 1142,
        height: 656,
        alt: "Preview image for Chandru Suresh",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} cursor-override-dark bg-light p-0 antialiased transition-colors dark:cursor-override dark:bg-dark`}
      >
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
