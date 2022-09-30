import React from "react";
import Header from "../../header";
import Footer from "../../footer";

import "../../css/home.css"

function Home() {

    const playlists = [
        {
            id: 1,
            nome: 'lofi',
            capa: './imagens/playlist-lofi.jpg'
        },
        {
            id: 2,
            nome: 'pop',
            capa: './imagens/playlist-pop.jpg'
        },
        {
            id: 2,
            nome: 'rap',
            capa: './imagens/playlist-rap.jpg'
        },
        {
            id: 3,
            nome: 'reggae',
            capa: './imagens/playlist-reggae.jpg'
        },
        {
            id: 4,
            nome: 'rock',
            capa: './imagens/playlist-rock.jpg'
        },
    ]

    const resultado = playlists.map( (p) => {
        return (
            <img src = {p.capa} className = "imagem-playlist"></img>
        )
    } );

  return (
    <div>
        <Header/>
        <main>
            <section className = "playlists">
            {resultado}
            </section>
                
        </main>
        <Footer/>
    </div>
  );
}

export default Home;
