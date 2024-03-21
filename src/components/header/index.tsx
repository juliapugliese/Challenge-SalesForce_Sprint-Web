'use client'
import "./styles.css"
import NavItems from "../NavItems";


export function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <NavItems link="https://www.salesforce.com/br">
                        <img src="salesforce-logo.png" alt="Logo da SalesForce"/>
                    </NavItems>
                    
                    {/*<li>
                        <a href="https://www.salesforce.com/br">
                            <img src="salesforce-logo.png" alt="Logo da SalesForce"/>
                        </a>
                    </li>*/}

                    <li className="dropdown">
                        <a href="">Produtos</a>
                    </li>

                    <NavItems link="http://salesforce.com" text="Empresa"></NavItems>
                    <NavItems link="http://salesforce.com" text="Suporte"></NavItems>
                    <NavItems link="http://salesforce.com" text="Aprendizado"></NavItems>


                </ul>
                <ul className="icones-conta">

                    <NavItems id="icone-busca" link="http://salesforce.com">
                        <img className="logo-barra-pesquisa"  src="assets/search-icon.svg" alt=""/>
                    </NavItems>

                    <li id="icone-busca">
                        <a href="http://salesforce.com">
                            <img className="logo-barra-pesquisa"  src="assets/search-icon.svg" alt=""/>
                        </a>
                    </li>

                    <NavItems id="login" link="http://salesforce.com" text="Login"></NavItems>
                    <li id="teste-gratis"><a href="http://salesforce.com">Teste Grátis</a></li>
                </ul>
            </nav>
        </header>
    );
}