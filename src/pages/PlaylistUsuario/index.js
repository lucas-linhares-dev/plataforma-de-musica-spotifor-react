import React, { useEffect, useState } from 'react';
import Header from "../../header";
import Footer from "../../footer";
import axios from 'axios';

import '../../css/playlist.css'
import '../../css/playlistUsuario.css'
import { useParams } from 'react-router-dom';


function Playlist(){

    let usuarioString = localStorage.getItem('usuarioLogado')
    let usuarioLogado = JSON.parse(usuarioString)

    const [usuario, setUsuario] = useState();
    const [musicaRemover, setMusicaRemover] = useState();

    useEffect( () => {  
        axios.get(`http://localhost:3001/usuarios/${usuarioLogado._id}`)
            .then((resposta) => setUsuario(resposta.data))
    },[])

    function removerMusica(e){
        let idMusica = e.target.value;

        axios.get(`http://localhost:3001/musicas/${idMusica}`)
            .then((res) => {
                const dados = res.data

                setMusicaRemover(dados)

                let musicasSalvas = usuarioLogado.playlists[0].musicas

                musicasSalvas = musicasSalvas.filter((m) => m._id != idMusica)

                usuarioLogado.playlists[0].musicas = musicasSalvas

                localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))

                axios.put(`http://localhost:3001/usuarios/${usuarioLogado._id}`, {
                    nome: usuarioLogado.nome,
                    idade: usuarioLogado.idade,
                    email: usuarioLogado.email,
                    senha: usuarioLogado.senha,
                    playlists: usuarioLogado.playlists
                })


                alert(`Música "${dados.nome}" removida com sucesso`)
                window.location.reload()
            })

       e.preventDefault();
    }
 

    const resultado = usuario?.playlists[0].musicas.map( (m) => { 
        return(
            <div>
                <li className='musica'>
                    <h4 className='nome'>{m.nome}</h4>
                    <p className='artista'>{m.artista}</p>
                    <audio src={m.audio} className='audio' controls></audio>
                    <button className='btn-excluir' value={m._id} onClick={removerMusica} >Excluir</button>
                </li>
            </div>
        )
    })

    return(
        <div>
            <Header/>
            <main className='playlist-usuario-main'>
                <div className="card-playlist"> 
                    <img src={usuario?.playlists[0].capa}></img>
                    <h2>{usuario?.playlists[0].nome}</h2>
                </div>
                <div className="section-usuario-musicas-playlist">
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