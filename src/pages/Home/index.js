import React, { useEffect, useState } from "react";
import Header from "../../header";
import Footer from "../../footer";
import { Link } from 'react-router-dom';
import axios from 'axios';

import "../../css/home.css"

function Home() {

    let usuarioLogado = localStorage.getItem('usuarioLogado')

    const [playlists, setPlaylists] = useState([]);
    const [usuario, setUsuario] = useState();

    useEffect( () => {
        axios.get('http://localhost:3001/playlists')
            .then( (resposta) => setPlaylists(resposta.data)) 
    },[])

    useEffect( () => {
        axios.get('http://localhost:3001/usuarios/1') // depois pegar usuario dinamicamente
            .then( (resposta) => setUsuario(resposta.data)) 
    },[])


    const minhasPlaylists = usuario?.playlists?.map( (playlist) => {  // to = 'playlist/{playlista.id}'
        return (
            <div className="card">
                <Link to={`/playlist-usuario/${playlist.id}`} className="link-imagem-playlist"> 
                    <img src={playlist.capa} className = "imagem-playlist"></img>
                </Link>
                <h3 className="nome-playlist">{playlist.nome}</h3>
            </div>
        )
    } )

    const playlistsAbertas = playlists?.map( (playlist) => {  // to = 'playlist/{playlista.id}'
        return (
            <div className="card">
                <Link to={`/playlist/${playlist.id}`} className="link-imagem-playlist"> 
                    <img src={playlist.capa} className = "imagem-playlist"></img>
                </Link>
                <h3 className="nome-playlist">{playlist.nome}</h3>
            </div>
        )
    } )


  return (
    <div>
        <Header/>
        <main className="home-main">
            { usuarioLogado && <section className="minhas-playlists">
                <h2 className="title-minhas-playlists">Minhas Playlists</h2>
                {minhasPlaylists}
                <button>Criar Playlist</button>
            </section>}
            <section className = "playlists">
                <h2 className="title-playlists">Playlists</h2>
                <div className="cards">
                    {playlistsAbertas}
                </div>
            </section>
                
        </main>
        <Footer/>
    </div>
  );
}

export default Home;
