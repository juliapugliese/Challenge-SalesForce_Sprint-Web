import "./styles.css";
import FooterItem from "../Grupo-footer";
import LinkFooter from "../LinkFooter";

export function Footer() {
  return (
    <footer>
      <div className="conteudo-footer">

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
            <p className="titulo-footer">Baixe nosso app</p>
            <img className="app-playstore" src="vector.png" />
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
          <p>Ouvidoria 0800 015 3855</p>
          <p>Central de Serviços (11) 3155 2300</p>
          <p>Deficientes de áudio e fala 0800 770 0330</p>
          <p>SAC 0800-015-3855</p>
        </FooterItem>


        <div>
          <FooterItem title="Suporte">
            <p>Conta</p>
            <p>FAQ</p>
            <p>Help Center</p>
          </FooterItem>
          <FooterItem title="Dev Team">
            <p>Gabriel Torres Fernandes - 553635</p>  
            <p>Julia Gonzalez Pugliese Ribeiro - 553427</p>
          </FooterItem>
          
        </div>

      </div>
    </footer>
  );
}
