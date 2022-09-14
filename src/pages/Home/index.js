import React from "react";
import Header from "../../header";
import Footer from "../../footer";

import("../projeto-plataforma-de-musica-spotifor/css/home.css")

function Home() {
  return (
    <div>
        <Header/>
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
        <Footer/>
    </div>
  );
}

export default Home;
