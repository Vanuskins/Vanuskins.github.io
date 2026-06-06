import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vanuskins — Designer & Creative Dev",
  description: "Personal portfolio of Vanuskins.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
