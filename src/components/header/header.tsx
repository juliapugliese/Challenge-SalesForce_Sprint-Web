import "./styles.css"

export function Header() {
    return (
        <header>
            <nav>
                <ul className="icones-site">
                    <li>
                        <a href="https://www.salesforce.com/br">
                            <img src="salesforce-logo.png" alt="Logo da SalesForce"/>
                        </a>
                    </li>

                    <li className="dropdown">
                        <a href="">Produtos</a>
                    </li>

                    <li><a href="http://salesforce.com">Empresa</a></li>
                    <li><a href="http://salesforce.com">Suporte</a></li>
                    <li><a href="http://salesforce.com">Aprendizado</a></li>

                </ul>
                <ul className="icones-conta">
                    <li id="icone-busca" className="button">
                        <a href="http://salesforce.com">
                            <img className="logo-barra-pesquisa"  src="assets/search-icon.svg" alt=""/>
                        </a>
                    </li>
                    <li id="login" className="button"><a href="http://salesforce.com">Login</a></li>
                    <li id="teste-gratis" className="button"><a href="http://salesforce.com">Teste Grátis</a></li>
                </ul>
            </nav>
        </header>
    );
}