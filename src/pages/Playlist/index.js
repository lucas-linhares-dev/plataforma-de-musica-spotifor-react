import React, { useEffect, useState } from 'react';
import Header from "../../header";
import Footer from "../../footer";
import axios from 'axios';

import '../../css/playlist.css'


function Playlist(){

    const [playlists, setPlaylists] = useState([]);

    useEffect( () => {                                     // Após o componente ser renderizado -- Set nas musicas com os dados da porta
        axios.get('http://localhost:3001/playlists')
            .then((resposta) => setPlaylists(resposta.data))
    },[])


    const resultado = playlists.map( (playlist) => {
        return(
            <div>
                <li className='musica'>
                    <h4 className='nome'>{playlist.nome}</h4>
                    <p className='artista'>{playlist.musicas.artista}</p>
                    <audio src={playlist.musicas.audio} className='audio' controls></audio>
                </li>
            </div>
        )
    })

    return(
        <div>
            <Header/>
            <main className='playlist-main'>
                <div className="card-playlist"> 
                    <img src='./imagens/playlist-lofi.jpg'></img>
                    <h2>Lofi Hip-Hop</h2>
                </div>
                <div className="section-musicas-playlist">
                    <ol>
                        {resultado}
                    </ol>
                </div>

            </main>
            <Footer/>
        </div>
    )
}

export default Playlist;