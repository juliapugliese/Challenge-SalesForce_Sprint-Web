'use client'
import "./styles.css"
import NavItems from "../NavItems";
import Image from "next/image";


export function Section4() {
    return (

        <section className="section4">
          <div>
            <h2>Entregue sucesso agora com o Salesforce Customer 360.</h2>
            <p>O Customer 360 é a nossa suíte de produtos e serviços que ajuda 98% dos clientes a alcançar ou superar suas metas de ROI.</p>
            <div>
              <NavItems id="saiba-mais" link="http://salesforce.com" text="Saiba Mais"/>
              <NavItems id="teste-gratis-section" link="http://salesforce.com" text="Teste Grátis"/>
            </div>
            
          </div>
          <Image src="homepage-img.webp" alt=""/>
        </section>
    );
}