'use client'
import "./styles.css"
import NavItems from "../NavItems";
import DropDown from "../DropDown";


export function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <NavItems link="https://www.salesforce.com/br" id="logo" img={<img src="salesforce-logo.png" alt="Logo da SalesForce"/>}/>

                    <DropDown text="Produtos"/>

                    <NavItems link="http://salesforce.com" text="Empresa"/>
                    <NavItems link="http://salesforce.com" text="Suporte"/>
                    <NavItems link="http://salesforce.com" text="Aprendizado"/>

                </ul>
    
                <ul>
     
                    <NavItems id="icone-busca" link="http://salesforce.com">
                        <img className="logo-barra-pesquisa"  src="search-icon2.svg" alt=""/>
                    </NavItems>

                    <NavItems id="login" link="http://salesforce.com" text="Login"/>
                    <NavItems id="teste-gratis" link="http://salesforce.com" text="Teste Grátis"/>
                </ul>
            </nav>
        </header>
    );
}