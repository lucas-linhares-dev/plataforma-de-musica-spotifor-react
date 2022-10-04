import React, { useState } from 'react';
import Header from "../../header";
import Footer from "../../footer";

import '../../css/playlist.css'


function Playlist(){


    const musicas = [
        {
            id: 1,
            nome: 'Companions',
            artista: 'Amtrac',
            audio: './audios/Amtrac - Companions.mp3'
        },
        {
            id: 2,
            nome: 'Madness To Mayhem',
            artista: 'Amtrac',
            audio: './audios/Amtrac - Madness To Mayhem.mp3'
        },
        {
            id: 3,
            nome: 'Atlas',
            artista: 'Lane 8',
            audio: './audios/Lane 8 - Atlas.mp3'
        },
        {
            id: 4,
            nome: 'Brightest Lights feat. POLIÇA',
            artista: 'Lane 8',
            audio: './audios/Lane 8 - Brightest Lights feat. POLIÇA.mp3'
        },
        {
            id: 5,
            nome: 'Fingerprint',
            artista: 'Lane 8',
            audio: './audios/Lane 8 - Fingerprint.mp3'
        },
    ]

    const resultado = musicas.map( (m) => {
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