'use client'
import "./styles.css"
import Recursos from "../Vetor-recursos";


export function Section1() {
    return (

        <section className="section1">

          <h2>Saiba como os produtos Salesforce ajudam você a reduzir custos e economizar tempo.</h2>

          <div className="recursos-div">
            <Recursos img="pequenas_empresas.svg" alt="" link="" title="Pequenas empresas" text="Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo."/>
            <Recursos img="vendas.svg" alt="" link="" title="Vendas" text="Feche mais negócios e acelere o crescimento com o CRM nº1."/>
            <Recursos img="atendimento.svg" alt="" link="" title="Atendimento" text="Gaste menos com serviços escaláveis que os clientes adoram."/>
            <Recursos img="marketing.svg" alt="" link="" title="Marketing" text="Atraia clientes. Gere mais engajamento. Construa relações duradouras."/>
            <Recursos img="commerce.svg" alt="" link="" title="Commerce" text="Obtenha valor rapidamente na plataforma que já conquistou as maiores marcas do mercado"/>
            
            {/* <Recursos img="bolt-icon.svg" alt="" link="" title="Plataforma" text="Conecte toda a sua equipe e seus dados com apps construídos em cliques, e não códigos."/>
            <Recursos img="factory-icon.svg" alt="" link="" title="Indústrias" text="Enfrente os maiores desafios do seu setor com uma solução sob medida."/>
            <Recursos img="work.com.svg" alt="" link="" title="Work.com" text="Obtenha orientação, dados e soluções de especialistas para ajudar sua empresa a reabrir com segurança."/>
            <Recursos img="mulesoft.webp" alt="" link="" title="MuleSoft" text="Conecte todos os aplicativos, dados ou dispositivos, na nuvem ou no local."/>
            <Recursos img="slack.svg" alt="" link="" title="Slack" text="Aumente a produtividade, automatize o trabalho e conecte-se com os clientes."/>
            <Recursos img="tableau.svg" alt="" link="" title="Tableau" text="Obtenha insights poderosos a partir de qualquer dado, a qualquer momento e em qualquer lugar."/> */}


            <Recursos img="todos_produtos.svg" alt="" link="" title="Veja todos os produtos" text="Descubra como nossas ofertas do Customer 360 proporcionam sucesso imediato."/>


          </div>
        </section>
    );
}