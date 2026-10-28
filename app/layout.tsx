import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haven TV Launcher | Your TV. Your Haven.",
  description: "A customizable, ad-free home screen for Android TV and Google TV. Discover Kingdom and Tide themes, Watch Now, app collections, NBA, wallpapers and quick TV settings.",
  keywords: ["Haven TV Launcher", "Android TV launcher", "Google TV launcher", "ad-free TV launcher"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Haven TV Launcher | Your TV. Your Haven.",
    description: "A calmer home for everything you watch on Android TV and Google TV.",
    type: "website",
    images: [{ url: "/images/kingdom-night.webp", width: 1616, height: 892, alt: "Haven Kingdom TV launcher screenshot" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body data-skin="mist">{children}</body></html>;
}
