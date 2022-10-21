import React, { useEffect, useState } from "react";
import Header from "../../header";
import Footer from "../../footer";
import { Link } from 'react-router-dom';
import axios from 'axios';

import "../../css/home.css"

function Home() {

    const [playlists, setPlaylists] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:3001/playlists')
            .then( (resposta) => setPlaylists(resposta.data)) 
    },[])

    const resultado = playlists.map( (playlist) => {  // to = 'playlist/{playlista.id}'
        return (
            <div className="card">
                <Link to={`/playlist/${playlist.id}`} className="link-imagem-playlist"> 
                    <img src={playlist.capa} className = "imagem-playlist"></img>
                </Link>
                <h3 className="nome-playlist">{playlist.nome}</h3>
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
