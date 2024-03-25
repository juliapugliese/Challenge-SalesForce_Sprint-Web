'use client'
import "./styles.css"
import IconeSobre from "../Icone-sobre";

export function Section2() {
    return (

        <section className="section2">
        
            <h2>Saiba como os produtos Salesforce ajudam você a reduzir custos e economizar tempo.</h2>
        
            <div>
                <IconeSobre link="" img="1state-of-sales-resource-card.png" alt="" tag="Relatório" title="Leia nosso último relatório da Pesquisa State of Sales." text="Saiba como mais de 7.700 profissionais de vendas estão obtendo sucesso imediato."/>
                <IconeSobre link="" img="2php-sf-blog.png" alt="" tag="Blog" title="Conheça o Blog da Salesforce." text="Notícias e percepções para impulsionar a transformação de seus negócios."/>
                <IconeSobre link="" img="3home-news-bar-evergreen-events.png" alt="" tag="Webinar" title="Salesforce e inter: Faça mais com menos." text="Aprenda como conectar os dados do cliente para impulsionar a eficiência do marketing."/>
            
            </div>
        </section>
    );
}