'use client'
import "./styles.css"
import NavItems from "../NavItems";
import React, { useState } from 'react';
import Image from "next/image";

export function Header() {
    const [isNavActive, setIsNavActive] = useState(false);

    return (
        <header>
            <nav className={`nav ${isNavActive ? 'active' : ''}`}>
                <div>
                    <NavItems link="http://localhost:3000/" id="logo" img={<Image src="salesforce-logo.png" alt="Logo da SalesForce"/>}/>
                    <button className="hamburguer" onClick={() => setIsNavActive(!isNavActive)}></button>

                    <ul className="ul1">
                        <NavItems link="http://salesforce.com" text="Produtos"/>
                        <NavItems link="http://salesforce.com" text="Empresa"/>
                        <NavItems link="devteam" text="Suporte"/>
                        <NavItems link="http://salesforce.com" text="Aprendizado"/>
                    </ul>
                </div>

                <ul className="ul2">
                    <NavItems id="icone-busca" link="http://salesforce.com" img={<Image className="logo-barra-pesquisa" src="search-icon2.svg" alt="icone de lupa"/>}/>
                    <NavItems id="login" link="login" text="Login"/>
                    <NavItems id="teste-gratis" link="cadastro" text="Teste Grátis"/>
                </ul>
            </nav>
        </header>
    );
}
