import React, { useState } from "react";
import Header from "../../header";
import Footer from "../../footer";
import axios from 'axios';

import "../../css/cadastro.css"



function Login(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");



    function atualizaEmail(e){
        let valorDigitado = e.target.value;
        setEmail(valorDigitado);
    }

    function atualizaSenha(e){
        let valorDigitado = e.target.value;
        setSenha(valorDigitado);
    }



    function entrar(e){
        if(email != "" && senha != ""){
            axios.get(`http://localhost:3001/usuarios?email=${email}`)
                .then((res) => {

                    const usuario = res.data;

                    if(usuario == undefined){
                        setError("Ops! O Email informado não está cadastrado.")
                        window.scrollTo(0,0)
                        return
                    }
                    else if(usuario.senha != senha){
                        setError("Ops! A senha informada é inválida.")
                        window.scrollTo(0,0)
                        return
                    }
                    else{
                        localStorage.setItem('usuarioLogado', JSON.stringify(usuario))
                        alert("Login efetuado com sucesso!")
                        setEmail("")
                        setSenha("")
                        setError("")
                        window.location.href = 'http://localhost:3000'
                    }

                })
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
                <h2>Login</h2>
                {error && <h4 className="msg-erro">{error}</h4>}
                <form action="POST" onSubmit={entrar}>
                    <label for="email">E-mail</label>
                    <input type="E-mail" name="email" placeholder="Exemplo: joao-pedro@gmail.com" value = {email} onChange={atualizaEmail}/>
                    <label for="senha">Senha</label>
                    <input type="password" name="senha" placeholder="A senha é confidencial!" value = {senha} onChange={atualizaSenha}/>
                    <input type="submit" className="btn-cadastrar" value="Entrar"/>
                </form>
            </main>
            <Footer/>
        </div>
    )
}

export default Login;