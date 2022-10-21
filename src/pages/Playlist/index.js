import React, { useEffect, useState } from 'react';
import Header from "../../header";
import Footer from "../../footer";
import axios from 'axios';

import '../../css/playlist.css'
import { useParams } from 'react-router-dom';


function Playlist(){

    const {id} = useParams();
    const [playlist, setPlaylist] = useState();

    useEffect( () => {   // Após o componente ser renderizado -- Set nas musicas com os dados da porta
        axios.get(`http://localhost:3001/playlists/${id}`)
            .then((resposta) => setPlaylist(resposta.data))
    },[])
 

    const resultado = playlist?.musicas.map( (m) => { // SE TIVER ALGO EM PLAYLIST RENDERIZA MUSICAS
        return(
            <div>
                <li className='musica'>
                    <h4 className='nome'>{m.nome}</h4>
                    <p className='artista'>{m.artista}</p>
                    <audio src={m.audio} className='audio' controls></audio>
                </li>
            </div>
        )
    })

    return(
        <div>
            <Header/>
            <main className='playlist-main'>
                <div className="card-playlist"> 
                    <img src={playlist?.capa}></img>
                    <h2>{playlist?.nome}</h2>
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