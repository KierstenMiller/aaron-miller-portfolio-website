import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Aaron Miller Design",
  description: "A digital designer who creates efficient web experiences, beautiful graphic solutions, and experimental typography.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-HMSRC95411" />
    </html>
  );
}
