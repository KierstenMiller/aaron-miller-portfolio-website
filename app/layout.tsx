import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Aaron Miller Design",
  description: "A digital designer who creates efficient web experiences, beautiful graphic solutions, and experimental typography.",
  metadataBase: new URL('https://aaronmillerdesign.com'),
  openGraph: {
    title: 'Aaron Miller Design',
    description: 'A digital designer who creates efficient web experiences, beautiful graphic solutions, and experimental typography.',
    url: 'https://aaronmillerdesign.com',
    siteName: 'Aaron Miller Design',
    images: [
      {
        url: '/static/images/aaron-profile-pic_mobile.png', // Must be an absolute URL
        width: 681,
        height: 681,
        alt: 'Aaron Miller headshot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
