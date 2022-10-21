import {BrowserRouter, Routes, Route,} from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Suporte from './pages/Suporte';
import Playlist from './pages/Playlist';
import Login from './pages/Login'
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
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;