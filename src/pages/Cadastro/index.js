import React from "react";
import { Link } from 'react-router-dom'

import("../projeto-plataforma-de-musica-spotifor/css/header.css")
import("../projeto-plataforma-de-musica-spotifor/css/footer.css")
import("../projeto-plataforma-de-musica-spotifor/css/cadastro.css")

function cadastro(){
    return(
        <div>
            <header>
                <h1>Spotifor</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/suporte">Suporte</Link></li>
                        <li><Link to="/cadastro">Cadastre-se</Link></li>
                    </ul>
                </nav>
            </header>
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
            <footer>
                <p>Todos os direitos reservados</p>
            </footer>
        </div>
    )
}

export default cadastro;