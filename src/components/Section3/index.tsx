'use client'
import "./styles.css"
import EmpresasParceiras from "../Box-empresas";


export function Section3() {
    return (

        <section className="section3">
          <ul>
            <li><h2>Conheça nossos clientes</h2></li>
            <EmpresasParceiras link="" img="sumup-logo.svg" alt="Logo da empresa sumup" setor="Indústria" tipo="Serviços Financeiros"/>
            <EmpresasParceiras link="" img="gympass-logo.svg" alt="Logo da empresa gympass" setor="Indústria" tipo="Saúde"/>
            <EmpresasParceiras link="" img="tigre-logo.svg" alt="Logo da empresa tigre" setor="Indústria" tipo="Construção Civil"/>
            <EmpresasParceiras link="" img="vipal-logo.svg" alt="Logo da empresa vipal" setor="Indústria" tipo="Manufatura"/>
          </ul>
        </section>
    );
}