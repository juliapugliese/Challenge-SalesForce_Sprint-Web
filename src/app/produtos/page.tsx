'use client'
import React, { useState } from 'react';
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
<h1 className="title">
       Bem-vindo à Página de Login Salesforce
</h1>
<form onSubmit={handleSubmit} className="form">
<input
         type="text"
         value={username}
         onChange={(e) => setEmail(e.target.value)}
         placeholder="Email"
         className="input-field"
       />
<br />
<input
         type="password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         placeholder="Senha"
         className="input-field"
       />
<br />
<button type="submit" className="submit-button">
         Login
</button>
</form>
</div>
 );
};
export default Page;