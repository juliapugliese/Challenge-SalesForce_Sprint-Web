import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["100","300", "400", "500", "600", "700"]
});

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
        <Footer/>
      </body>
    </html>
  );
}
