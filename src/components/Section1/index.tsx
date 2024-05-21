'use client'
import "./styles.css"
import Recursos from "../Vetor-recursos";
import Image from "next/image";


export function Section1() {
    return (

        <section className="section1">

          <h2>Saiba como os produtos Salesforce ajudam você a reduzir custos e economizar tempo.</h2>

          <div className="recursos-div">
            <Recursos img="pequenas_empresas.svg" alt="icone casa" link="https://www.salesforce.com/br/" title="Pequenas empresas" text="Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo."/>
            <Recursos img="vendas.svg" alt="icone seta" link="https://www.salesforce.com/br/" title="Vendas" text="Feche mais negócios e acelere o crescimento com o CRM nº1."/>
            <Recursos img="atendimento.svg" alt="icone de coração" link="https://www.salesforce.com/br/" title="Atendimento" text="Gaste menos com serviços escaláveis que os clientes adoram."/>
            <Recursos img="marketing.svg" alt="icone de lupa" link="https://www.salesforce.com/br/" title="Marketing" text="Atraia clientes. Gere mais engajamento. Construa relações duradouras."/>
            <Recursos img="commerce.svg" alt="icone carrinho" link="https://www.salesforce.com/br/" title="Commerce" text="Obtenha valor rapidamente na plataforma que já conquistou as maiores marcas do mercado"/>
            

            <Recursos img="todos_produtos.svg" alt="icone quadrado" link="https://www.salesforce.com/br/" title="Veja todos os produtos" text="Descubra como nossas ofertas do Customer 360 proporcionam sucesso imediato."/>


          </div>
        </section>
    );
}