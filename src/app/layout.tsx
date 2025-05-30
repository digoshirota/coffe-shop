import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jostSans = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Tastely",
  description: "Tastely",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${jostSans.variable} ${jostSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
