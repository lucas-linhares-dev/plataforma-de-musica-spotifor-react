import React, { useState } from "react";
import Header from "../../header";
import Footer from "../../footer";
import axios from 'axios';

import "../../css/cadastro.css"


function CriarPlaylist(){

    let usuarioString = localStorage.getItem('usuarioLogado')
    let usuario = JSON.parse(usuarioString);

    const [nome, setNome] = useState("");
    const [error, setError] = useState();
    const [capa, setCapa] = useState("/imagens/playlist-lofi.jpg")
    

  
   

    function atualizaNome(e){
        let valorDigitado = e.target.value;
        setNome(valorDigitado);
    }

    function criar(e){
        e.preventDefault();
        
        if(nome == ""){
            setError("Informe o nome da playlist.")
            window.scrollTo(0,0)
        }
        else{

            let playlistAdicionar = {
                nome: nome,
                capa: capa,
                musicas: []
            }

            let playlistsUsuario = usuario.playlists

            playlistsUsuario.push(playlistAdicionar);

            usuario.playlists = playlistsUsuario
           
            axios.put(`http://localhost:3001/usuarios/${usuario.id}`, {nome: usuario.nome, idade: usuario.idade, email: usuario.email, senha: usuario.senha, playlists: playlistsUsuario})

            localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
            alert(`Playlist "${nome}" criada com sucesso`)

            window.scrollTo(0,0)

        }
            
    }

    return(
        <div>
            <Header/>
            <main className="cadastro-main">
                <h2>Criar playlist</h2>
                {error && <h4 className="msg-erro">{error}</h4>}
                <form action="POST" onSubmit={criar}>
                    <label for="nome">Nome</label>
                    <input type="text" name="nome" placeholder="Exemplo: Rock" value = {nome} onChange={atualizaNome}/>
                    <input type="submit" className="btn-cadastrar" value="Criar"/>
                </form>
            </main>
            <Footer/>
        </div>
    )
}

export default CriarPlaylist;