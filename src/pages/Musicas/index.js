import React, { useEffect, useState } from 'react';
import Header from "../../header";
import Footer from "../../footer";
import axios from 'axios';

import '../../css/playlist.css'
import '../../css/musicas.css'


function Musicas(){

    const usuario = localStorage.getItem('usuarioLogado')
    const [musicas, setMusicas] = useState([]);


    useEffect( () => {   // Após o componente ser renderizado -- Set nas musicas com os dados da porta
        axios.get(`http://localhost:3001/musicas`)
            .then((resposta) => setMusicas(resposta.data))
    },[])
 

    const resultado = musicas?.map( (m) => { 
        return(
            <div>
                <li className='musica'>
                    <h4 className='nome'>{m.nome}</h4>
                    <p className='artista'>{m.artista}</p>
                    <audio src={m.audio} className='audio' controls></audio>
                    {usuario && <button className='btn-adicionar'>+ Minha playlist</button>}
                </li>
            </div>
        )
    })

    return(
        <div>
            <Header/>
            <main className='playlist-main'>
                <h2 className='title-musicas'>Musicas</h2>
                <div className="musicas">
                    <ol>
                        {resultado}
                    </ol>
                </div>

            </main>
            <Footer/>
        </div>
    )
}

export default Musicas;