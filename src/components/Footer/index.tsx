import "./styles.css";
import FooterItem from "../FooterItem";
import LinkFooter from "../LinkFooter";

export function Footer() {
  return (
    <footer>

      
      <div className="conteudo-ilustrativo-footer">
        <img className="logo-footer" src="Salesforce-Logo.png" />

        <div>
          <div className="copyright">
            <img
              id="logo-copyright"
              src="ph-copyright.png"
            />
            <p>2023 Powerpro, Inc.</p>
          </div>

          <div className="redes-sociais-grupo">
            <img src="vector-WTB.png" alt="" />
            <img src="vector-WyF.png" alt="" />
            <img src="vector-Rmj.png" alt="" />
            <img src="vector-GyX.png" alt="" />
            <img src="vector-k4R.png" alt="" />
          </div>
        </div>

        <div className="baixe-nosso-app">
          <p>Baixe nosso app</p>
          <img src="vector.png" />
        </div>
      </div>

      <FooterItem title="Ainda não conhece a Salesforce?">
        
        <LinkFooter link="" text="O que é CRM?"/>
        <LinkFooter link="" text="O que é a Salesforce?"/>
        <LinkFooter link="" text="Software de automação de marketing"/>
        <LinkFooter link="" text="Explorar todos os produtos"/>
        <LinkFooter link="" text="O que é computação na nuvem?"/>
        <LinkFooter link="" text="Histórias de Clientes"/>
        <LinkFooter link="" text="Edições e Preços"/>
        <LinkFooter link="" text="Política de Privacidade"/>

      </FooterItem>

      <FooterItem title="Empresa">
        <LinkFooter link="https://www.salesforce.com/br/company/our-story/" text="Nossa história"/>
        <LinkFooter link="https://www.salesforce.com/br/blog/" text="Blog"/>
        <LinkFooter link="https://careers.salesforce.com/en/" text="Carreiras"/>
        <LinkFooter link="https://trust.salesforce.com/" text="Segurança"/>
        <LinkFooter link="https://www.salesforce.org/" text="Salesforce.org"/>
        <LinkFooter link="https://www.salesforce.com/company/sustainability/" text="Sustentabilidade"/>
        <LinkFooter link="https://investor.salesforce.com/overview/default.aspx" text="Investidores"/>
        <LinkFooter link="https://www.salesforce.com/company/feedback/" text="Dê-nos o seu feedback"/>
      
      </FooterItem>
      
      <FooterItem title="Links populares">


        <LinkFooter link="" text="Novos recursos e lançamentos"/>
        <LinkFooter link="" text="Salesforce para pequenas empresas"/>
        <LinkFooter link="" text="Encontre ou torne-se um parceiro"/>
        <LinkFooter link="" text="CRM Software"/>
        <LinkFooter link="" text="Salesforce LIVE"/>
        <LinkFooter link="" text="Dreamforce"/>
        <LinkFooter link="" text="Salesforce Mobile"/>


      </FooterItem>

      <div>
        <FooterItem title="Suporte">
          <LinkFooter link="" text="Entre em contato"/>
          <LinkFooter link="" text="0800 891 1887"/>
        </FooterItem>

        <FooterItem title="Dev Team">
          <LinkFooter link="" text="Gabriel Torres Fernandes - 553635"/> 
          <LinkFooter link="https://www.linkedin.com/in/julia-pugliese" text="Julia Gonzalez Pugliese Ribeiro - 553427"/>
        </FooterItem>
        
      </div>

    

    </footer>
  );
}
