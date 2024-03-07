import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header/header";
import Footer from "./ui/footer";
import MaxWidthProvider from "./utils/max-width-context";

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
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} flex min-h-svh flex-col bg-branford-600`}
      >
        <MaxWidthProvider>
          <Header />
          {children}
          <Footer />
        </MaxWidthProvider>
      </body>
    </html>
  );
}
