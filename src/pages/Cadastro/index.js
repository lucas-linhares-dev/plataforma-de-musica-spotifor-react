import React from "react";
import Header from "../../header";
import Footer from "../../footer";

import("../projeto-plataforma-de-musica-spotifor/css/cadastro.css")

function cadastro(){
    return(
        <div>
            <Header/>
            <main>
                <h2>Faça seu cadastro!</h2>
                <form action="POST">
                    <label for="nome">Nome completo</label>
                    <input type="text" name="nome" placeholder="Exemplo: João Pedro da Silva"/>
                    <label for="idade">Idade</label>
                    <input type="Number" name="idade" placeholder="Exemplo: 23"/>
                    <label for="e-mail">E-mail</label>
                    <input type="E-mail" name="e-mail" placeholder="Exemplo: joao-pedro@gmail.com"/>
                    <label for="senha">Senha</label>
                    <input type="password" name="senha" placeholder="A senha é confidencial!"/>
                    <input type="submit" className="btn-cadastrar" value="Cadastrar"/>
                </form>
            </main>
            <Footer/>
        </div>
    )
}

export default cadastro;