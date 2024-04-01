'use client'
import { Section1 } from "@/components/Section1";
import { Section2 } from "@/components/Section2";
import { Section3 } from "@/components/Section3";
import { Section4 } from "@/components/Section4";
import { Footer } from "@/components/Footer";

export default function Home() {

  return (
    <>
      <main>
        <Section4/>
        <Section2/>
        <Section1/>
        <Section3/>
      </main>
      <Footer/>
    </>


  );
}
