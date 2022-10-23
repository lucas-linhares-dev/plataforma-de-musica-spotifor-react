import React, { useEffect, useState } from 'react';
import Header from "../../header";
import Footer from "../../footer";
import axios from 'axios';

import '../../css/playlist.css'
import { useParams } from 'react-router-dom';


function Playlist(){

    const [usuario, setUsuario] = useState();

    useEffect( () => {   // Após o componente ser renderizado -- Set nas musicas com os dados da porta
        axios.get(`http://localhost:3001/usuarios/1`)
            .then((resposta) => setUsuario(resposta.data))
    },[])
 

    const resultado = usuario?.playlists[0].musicas.map( (m) => { // SE TIVER ALGO EM PLAYLIST RENDERIZA MUSICAS
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
                    <img src={usuario?.playlists[0].capa}></img>
                    <h2>{usuario?.playlists[0].nome}</h2>
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