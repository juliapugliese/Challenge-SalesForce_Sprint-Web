import { montserrat } from "@/app/fonts";
import "./globals.css";
import { Header } from "@/components/Header";
import { ReactNode } from "react";
import VLibras from "@/components/Vlibras/VLibras";
import Head from "next/head";
import Script from 'next/script';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Portal SalesForce</title>
        <meta name="description" content="Portal criado para a empresa SalesForce" />
        <Script src="https://vlibras.gov.br/app/vlibras-plugin.js" strategy="afterInteractive"></Script>
      </Head>
      <main className={montserrat.className}>
        <VLibras />
        <Header />
        {children}
      </main>
    </>
  );
};

export default RootLayout;

