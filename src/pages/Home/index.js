import React from "react";
import Header from "../../header";
import Footer from "../../footer";
import { Link } from 'react-router-dom';

import "../../css/home.css"

function Home() {

    const playlists = [
        {
            id: 1,
            nome: 'Lofi Hip-Hop',
            capa: './imagens/playlist-lofi.jpg'
        },
        {
            id: 2,
            nome: 'Pop',
            capa: './imagens/playlist-pop.jpg'
        },
        {
            id: 2,
            nome: 'Rap',
            capa: './imagens/playlist-rap.jpg'
        },
        {
            id: 3,
            nome: 'Clássicos do reggae',
            capa: './imagens/playlist-reggae.jpg'
        },
        {
            id: 4,
            nome: 'Rock forever',
            capa: './imagens/playlist-rock.jpg'
        },
        {
            id:5,
            nome:"O melhor da MPB",
            capa: './imagens/playlist-mpb.jpg'
        },
    ]

    const resultado = playlists.map( (p) => {
        return (
            <div className="card">
                <Link to='/playlist' className="link-imagem-playlist">
                    <img src = {p.capa} className = "imagem-playlist"></img>
                </Link>
                <h3 className="nome-playlist">{p.nome}</h3>
            </div>
        )
    } );

  return (
    <div>
        <Header/>
        <main className="home-main">
            <section className = "playlists">
                <h2>Playlists</h2>
                <div className="cards">
                    {resultado}
                </div>
            </section>
                
        </main>
        <Footer/>
    </div>
  );
}

export default Home;
