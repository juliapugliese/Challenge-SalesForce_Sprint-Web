'use client'
import "./styles.css";
import React, { useState } from 'react';
import NavItems from "@/components/NavItems";
const Page = () => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email:', username);
    console.log('Senha:', password);
  };
  return (
    <div className="login-page">
      <div>
        <img src="salesforce-logo.png" alt="Logo da SalesForce"/>
        <form onSubmit={handleSubmit} className="form">

          <h3>Nome de usuáro</h3>
          <input
            type="text"
            value={username}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input-field"
          />

          <h3>Senha</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            className="input-field"
          />

          <button type="submit" className="submit-button">Login</button>
        </form>

        <div className="complementos">
          <div>
            <div>
              <input type="checkbox" id="Lembre-me" name="Lembre-me" />
              <label form="Lembre-me">Lembrar-me</label>
            </div>

          </div>
          <div>
            <p>Esqueceu sua senha?</p>
            <p>Usar domínio personalizado</p>
          </div>
          <div>
            <p>Não é um cliente?</p>
            <NavItems id="teste-gratis-section" link="http://salesforce.com" text="Teste Grátis"/>
          </div>
          
        </div>



      </div>
      <div>
        <h2>Entregue sucesso agora com o Salesforce Customer 360.</h2>
        <p>O Customer 360 é a nossa suíte de produtos e serviços que ajuda 98% dos clientes a alcançar ou superar suas metas de ROI.</p>
        <div>
          <NavItems id="saiba-mais" link="http://salesforce.com" text="Saiba Mais"/>
          <NavItems id="teste-gratis-section" link="http://salesforce.com" text="Teste Grátis"/>
        </div>
            
      </div>
    </div>
  );
};
export default Page;