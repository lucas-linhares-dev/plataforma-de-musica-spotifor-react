import React from "react";
import { Link } from 'react-router-dom'

import("../projeto-plataforma-de-musica-spotifor/css/header.css")
import("../projeto-plataforma-de-musica-spotifor/css/footer.css")
import("../projeto-plataforma-de-musica-spotifor/css/home.css")

function Home() {
  return (
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
        <section className="card-musicas-principais">
            <h2>Em alta</h2>
            <div className="div-doja">
                <p>Doja cat - Like that</p>
            </div>
            <div className="div-drake">
                <p>Drake - Gods plan</p>
            </div>
            <div className="div-rihanna">
                <p>Rihanna - Work</p>
            </div>
            <div className="div-theweek">
                <p>The weekend - Blinding lights</p>
            </div>
            <div className="div-foo">
                <p>Foo fighters - The pretender</p>
            </div>
        </section>
        <section className="card-musicas-rock">
            <h2>Rock</h2>
            <div className="div-doja">
                <p>Doja cat - Like that</p>
            </div>
            <div className="div-drake">
                <p>Drake - Gods plan</p>
            </div>
            <div className="div-rihanna">
                <p>Rihanna - Work</p>
            </div>
            <div className="div-theweek">
                <p>The weekend - Blinding lights</p>
            </div>
            <div className="div-foo">
                <p>Foo fighters - The pretender</p>
            </div>
        </section>
        <section className="card-musicas-hip-hop">
            <h2>Hip-Hop</h2>
            <div className="div-doja">
                <p>Doja cat - Like that</p>
            </div>
            <div className="div-drake">
                <p>Drake - Gods plan</p>
            </div>
            <div className="div-rihanna">
                <p>Rihanna - Work</p>
            </div>
            <div className="div-theweek">
                <p>The weekend - Blinding lights</p>
            </div>
            <div className="div-foo">
                <p>Foo fighters - The pretender</p>
            </div>
        </section>
        <section className="card-musicas-forro">
            <h2>Forró</h2>
            <div className="div-doja">
                <p>Doja cat - Like that</p>
            </div>
            <div className="div-drake">
                <p>Drake - Gods plan</p>
            </div>
            <div className="div-rihanna">
                <p>Rihanna - Work</p>
            </div>
            <div className="div-theweek">
                <p>The weekend - Blinding lights</p>
            </div>
            <div className="div-foo">
                <p>Foo fighters - The pretender</p>
            </div>
        </section>
    </main>
    <footer>
        <p>Todos os direitos reservados</p>
    </footer>
  </div>
  );
}

export default Home;
