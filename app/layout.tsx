import type { Metadata } from "next";
import { Footer, Header } from "./components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Comfort | Hotel Prototype",
  description:
    "Premium serviced apartments near the University of Ilorin axis in Ilorin, Kwara State, Nigeria.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
