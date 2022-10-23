import React from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react'

import("./css/header.css")

function Header(){

    const usuario = localStorage.getItem('usuarioLogado')
    
    return(
        <div>
            <header>
                <h1>Spotifor</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Playlists</Link></li>
                        <li><Link to="/musicas">Musicas</Link></li>
                        <li><Link to="/suporte">Suporte</Link></li>
                        { !usuario && <li><Link to="/cadastro">Cadastre-se</Link></li>}
                        { !usuario && <li><Link to="/login">Entrar</Link></li>}
                        { usuario && <li><Link to="/conta">Conta</Link></li>}
                        { usuario && <li><Link to="/sair">Sair</Link></li>}
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;
