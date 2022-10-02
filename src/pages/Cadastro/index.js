import React, { useState } from "react";
import Header from "../../header";
import Footer from "../../footer";

import "../../css/cadastro.css"


function Cadastro(){

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [email, setEmail] = useState("");
    const [confirmacaoEmail, setConfirmacaoEmail] = useState("");
    const [senha, setSenha] = useState("");
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

    function cadastrar(e){
         if(confirmacaoEmail != email){
            setError("Ops! Seu E-mail de confirmação é inválido.")
            window.scrollTo(0,0)
         }
         else if(confirmacaoSenha != senha){
            setError("Ops! Sua senha de confirmação é inválida.")
            window.scrollTo(0,0)
         }
         else if(nome != "" && idade != "" && email != "" && senha != "" && confirmacaoEmail != "" && confirmacaoSenha != "" ){

            alert("Cadastro efetuado com sucesso.")
            window.scrollTo(0,0)
            
            const usuario = { nome, idade, email, senha }

            

            setError("")
            setNome("")
            setEmail("")
            setConfirmacaoEmail("")
            setIdade("")
            setSenha("")
            setConfirmacaoSenha("")
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
                <h2>Faça seu cadastro!</h2>
                {error && <h4 className="msg-erro">{error}</h4>}
                <form action="POST" onSubmit={cadastrar}>
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
                    <input type="submit" className="btn-cadastrar" value="Cadastrar"/>
                </form>
            </main>
            <Footer/>
        </div>
    )
}

export default Cadastro;