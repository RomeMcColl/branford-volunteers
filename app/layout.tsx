import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header/header";
import Footer from "./ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Branford Volunteers",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}>) {
  const maxWidth = "max-w-[1500px]";
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-svh flex-col bg-branford-600`}
      >
        <Header maxWidth={maxWidth} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
