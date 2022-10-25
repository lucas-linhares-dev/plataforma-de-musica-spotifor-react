import {BrowserRouter, Routes, Route,} from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Suporte from './pages/Suporte';
import Playlist from './pages/Playlist';
import Conta from './pages/Conta';
import Login from './pages/Login';
import Sair from './pages/Sair'
import Musicas from './pages/Musicas'
import PlaylistUsuario from './pages/PlaylistUsuario'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function RoutesApp(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/cadastro" element={ <Cadastro/> }/>
                <Route path='/suporte' element={ <Suporte/> }/>
                <Route path={'/playlist/:id'} element={ <Playlist/> }/>\
                <Route path='/login' element={ <Login/> }/>
                <Route path='/conta' element={ <Conta/> }/>
                <Route path='/sair' element={ <Sair/> }/>
                <Route path='/musicas' element={ <Musicas/> }/>
                <Route path='/usuarios/:id' element={ <PlaylistUsuario/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;