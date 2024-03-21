import "./styles.css";
import FooterItem from "../grupo-footer";

export function Footer() {
  return (
    <footer>
      <div className="conteudo-footer">
        <div className="conteudo-ilustrativo-footer">
          <img className="logos-footer" src="assets/Salesforce-Logo.png" />

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
            <p>Sobre nós</p>
            <p>Careira</p>
            <p>Política de Privacidade</p>
            <p>Termos de Serviço</p>
        </FooterItem>

        <div className="grupo-footer">
          <p className="titulo-footer">Empresa</p>
          <div className="paragrafo-footer">
            <p>Sobre nós</p>
            <p>Careira</p>
            <p>Política de Privacidade</p>
            <p>Termos de Serviço</p>
          </div>
        </div>

        <div className="grupo-footer">
          <p className="titulo-footer">Hapvida</p>
          <div className="paragrafo-footer">
            <p>
              Atendimento 4002-3633
              <br />
            </p>
            <p>Call Center 0300-313-3633</p>
            <p>SAC 0800-280-9130</p>
          </div>
        </div>

        <div className="grupo-footer">
          <p className="titulo-footer">
            NotreDame
            <br />
            Intermédica
          </p>
          <div className="paragrafo-footer">
            <p>Ouvidoria 0800 015 3855</p>
            <p>Central de Serviços (11) 3155 2300</p>
            <p>Deficientes de áudio e fala 0800 770 0330</p>
            <p>SAC 0800-015-3855</p>
          </div>
        </div>

        <div className="grupo-footer">
          <p className="titulo-footer">Emergência</p>
          <div className="paragrafo-footer">
            <p>Ouvidoria SUS 136</p>
            <p>SAMU 192</p>
            <p>Polícia Militar 190</p>
            <p>Polícia Civil 197</p>
            <p>Bombeiros 193</p>
            <p>Centro de Assistência toxicológica 0800-644-6774</p>
          </div>
        </div>

        <div className="grupo-footer">
          <p className="titulo-footer">Suporte </p>
          <div className="paragrafo-footer">
            <p>Conta</p>
            <p>FAQ</p>
            <p>Help Center</p>
          </div>

          <p className="titulo-footer">Dev Team </p>
          <div className="paragrafo-footer">
            <p>Gabriel Torres Fernandes - 553635</p>
            <p>Julia Gonzalez Pugliese Ribeiro - 553427</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
