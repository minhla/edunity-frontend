import type { Metadata } from "next";
import { Epilogue, Sora } from "next/font/google";
import "./globals.css";
import "@smastrom/react-rating/style.css";

import Topbar from "@/components/custom/topbar";
import Footer from "@/components/custom/footer";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Edunity",
  description: "Achieving Your Dreams Through Education",
};

const epilogue = Epilogue({ subsets: ["latin"], variable: "--font-epilogue" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${epilogue.variable} ${sora.variable}`}>
        <Suspense>
          <Topbar />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}
