'use client'
import "./styles.css"
import Recursos from "../Vetor-recursos";


export function Section() {
    return (

        <section className="section2">


          <h2>Saiba como os produtos Salesforce ajudam você a reduzir custos e economizar tempo.</h2>


          <div className="recursos-div">
            <Recursos img="pequenas_empresas.svg" alt="" link="" title="Pequenas empresas" text="Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo."/>
            <Recursos img="vendas.svg" alt="" link="" title="Vendas" text="Feche mais negócios e acelere o crescimento com o CRM nº1."/>
            <Recursos img="atendimento.svg" alt="" link="" title="Atendimento" text="Gaste menos com serviços escaláveis que os clientes adoram."/>
            <Recursos img="marketing.svg" alt="" link="" title="Marketing" text="Atraia clientes. Gere mais engajamento. Construa relações duradouras."/>
            <Recursos img="commerce.svg" alt="" link="" title="Commerce" text="Obtenha valor rapidamente na plataforma que já conquistou as maiores marcas do mercado"/>
            <Recursos img="todos_produtos.svg" alt="" link="" title="Veja todos os produtos" text="Descubra como nossas ofertas do Customer 360 proporcionam sucesso imediato."/>

          </div>

            

            {/* <div className="recursos">
                <div>
                    <img className="vetor-recursos" src="assets/pequenas_empresas.svg"/>
                    <div>
                      <p>Pequenas empresas</p>
                      <p>Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.</p>
                    </div>
                </div>

                <div>
                    <img className="vetor-recursos" src="assets/vendas.svg"/>
                    <div>
                      <p>Vendas</p>
                      <p>Feche mais negócios e acelere o crescimento com o CRM nº1.</p>
                    </div>
                </div>

                <div>
                    <img className="vetor-recursos" src="assets/atendimento.svg"/>
                    <div>
                      <p>Atendimento</p>
                      <p>Gaste menos com serviços escaláveis que os clientes adoram.</p>
                    </div>
                </div>

                <div>
                    <img className="vetor-recursos" src="assets/marketing.svg"/>
                    <div>
                      <p>Marketing</p>
                      <p>Atraia clientes. Gere mais engajamento.Construa relações duradouras.</p>
                    </div>
                </div>

                <div>
                    <img className="vetor-recursos" src="assets/commerce.svg"/>
                    <div>
                      <p>Commerce</p>
                      <p>Obtenha valor rapidamente na plataforma que já conquistou as maiores marcas do mercado.</p>
                    </div>
                </div>

                <div>
                    <img className="vetor-recursos" src="assets/todos_produtos.svg"/>
                    <div>
                      <p>Veja todos os produtos</p>
                      <p>Descubra como nossas ofertas do Customer 360 proporcionam sucesso imediato.</p>
                    </div>
                </div> */}
            {/* </div> */}
        </section>
    );
}