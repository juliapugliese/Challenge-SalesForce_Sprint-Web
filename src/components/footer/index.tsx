import "./styles.css";
import FooterItem from "../FooterItem";
import LinkFooter from "../LinkFooter";

export function Footer() {
  return (
    <footer>

        
      <div className="conteudo-ilustrativo-footer">
        <img className="logos-footer" src="Salesforce-Logo.png" />

        <div>
          <div className="copyright">
            <img
              className="logo-copyright"
              id="logo-copyright"
              src="ph-copyright.png"
            />
            <p className="copyright-text">2023 Powerpro, Inc.</p>
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


        <LinkFooter link="" text=""/>
        <LinkFooter link="" text=""/>
        <LinkFooter link="" text=""/>
        <LinkFooter link="" text=""/>
        <LinkFooter link="" text=""/>

      </FooterItem>

      <FooterItem title="NotreDame Intermédica">
        
        <LinkFooter link="" text=""/>
        <LinkFooter link="" text=""/>
        <LinkFooter link="" text=""/>
        <LinkFooter link="" text=""/>
        <LinkFooter link="" text=""/>

      </FooterItem>


      <div>
        <FooterItem title="Suporte">
  
          <LinkFooter link="" text=""/>
          <LinkFooter link="" text=""/>
          <LinkFooter link="" text=""/>
          <LinkFooter link="" text=""/>
          <LinkFooter link="" text=""/>
        </FooterItem>

        <FooterItem title="Dev Team">
          <LinkFooter link="" text="Gabriel Torres Fernandes - 553635"/> 
          <LinkFooter link="https://www.linkedin.com/in/julia-pugliese" text="Julia Gonzalez Pugliese Ribeiro - 553427"/>
        </FooterItem>
        
      </div>

    </footer>
  );
}
