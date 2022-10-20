import React from "react";
import { Link } from 'react-router-dom';

import("./css/header.css")

function Header(){

    
    return(
        <div>
            <header>
                <h1>Spotifor</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Playlists</Link></li>
                        <li><Link to="/suporte">Suporte</Link></li>
                        <li><Link to="/cadastro">Cadastre-se</Link></li>
                        <li><Link to="/login">Entrar</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;
