import React, { useState } from "react";
import Header from "../../header";
import Footer from "../../footer";

import "../../css/cadastro.css"
import axios from "axios";


function Conta(){

    let usuarioString = localStorage.getItem('usuarioLogado');
    let usuario = JSON.parse(usuarioString);



    const [nome, setNome] = useState(usuario.nome);
    const [idade, setIdade] = useState(usuario.idade);
    const [email, setEmail] = useState(usuario.email);
    const [confirmacaoEmail, setConfirmacaoEmail] = useState("");
    const [senha, setSenha] = useState(usuario.senha);
    const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
    const [error, setError] = useState("");

    function atualizaNome(e){
        let valorDigitado = e.target.value;
        setNome(valorDigitado);
    }

    function atualizaIdade(e){
        let valorDigitado = e.target.value;
        setIdade(valorDigitado);
    }

    function atualizaEmail(e){
        let valorDigitado = e.target.value;
        setEmail(valorDigitado);
    }
    function atualizaConfirmacaoEmail(e){
        let valorDigitado = e.target.value;
        setConfirmacaoEmail(valorDigitado);
    }

    function atualizaSenha(e){
        let valorDigitado = e.target.value;
        setSenha(valorDigitado);
    }

    function atualizaConfirmacaoSenha(e){
        let valorDigitado = e.target.value;
        setConfirmacaoSenha(valorDigitado);
    }

    function alterar(e){
         if(confirmacaoEmail != email){
            setError("Ops! Seu E-mail de confirmação é inválido.")
            window.scrollTo(0,0)
         }
         else if(confirmacaoSenha != senha){
            setError("Ops! Sua senha de confirmação é inválida.")
            window.scrollTo(0,0)
         }
         else if(nome != "" && idade != "" && email != "" && senha != "" && confirmacaoEmail != "" && confirmacaoSenha != "" ){

            usuario.nome = nome;
            usuario.idade = idade;
            usuario.email = email;
            usuario.senha = senha;

            axios.put(`http://localhost:3001/usuarios/${usuario.id}`, {nome: nome, idade: idade, email: email, senha: senha})

            localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
            alert("Conta alterada com sucesso.")

            window.scrollTo(0,0)

            window.location.href = 'http://localhost:3000'
         }
         else{
            setError("Ops! Você esqueceu de preencher algum campo.")
            window.scrollTo(0,0)
         }

         e.preventDefault();

    }

    

    return(
        <div>
            <Header/>
            <main className="cadastro-main">
                <h2>Atualize sua conta, {usuario.nome}</h2>
                {error && <h4 className="msg-erro">{error}</h4>}
                <form action="POST" onSubmit={alterar}>
                    <label for="nome">Nome completo</label>
                    <input type="text" name="nome" placeholder="Exemplo: João Pedro da Silva" value = {nome} onChange={atualizaNome}/>
                    <label for="idade">Idade</label>
                    <input type="Number" name="idade" placeholder="Exemplo: 23" value = {idade} onChange={atualizaIdade}/>
                    <label for="email">E-mail</label>
                    <input type="E-mail" name="email" placeholder="Exemplo: joao-pedro@gmail.com" value = {email} onChange={atualizaEmail}/>
                    <label for="email">Confirme seu E-mail</label>
                    <input type="E-mail" name="email" value = {confirmacaoEmail} onChange={atualizaConfirmacaoEmail}/>
                    <label for="senha">Senha</label>
                    <input type="password" name="senha" placeholder="A senha é confidencial!" value = {senha} onChange={atualizaSenha}/>
                    <label for="senha">Confirme sua Senha</label>
                    <input type="password" name="senha" placeholder="A senha é confidencial!" value = {confirmacaoSenha} onChange={atualizaConfirmacaoSenha}/>
                    <input type="submit" className="btn-cadastrar" value="Alterar"/>
                </form>
            </main>
            <Footer/>
        </div>
    )
}

export default Conta;