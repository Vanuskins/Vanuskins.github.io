import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vanuskins — Designer & Creative Dev",
  description: "Personal portfolio of Vanuskins.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&family=Space+Mono:wght@700&family=Bebas+Neue&family=Dancing+Script:wght@700&family=Righteous&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}