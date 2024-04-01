import type { Metadata } from "next";
import { montserrat } from "@/app/fonts";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";


export const metadata: Metadata = {
  title: "Portal SalesForce",
  description: "Portal criado para a empresa SalesForce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
