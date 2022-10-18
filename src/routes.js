import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Suporte from './pages/Suporte';
import Playlist from './pages/Playlist';
import Login from './pages/Login'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/cadastro" element={ <Cadastro/> }/>
                <Route path='/suporte' element={ <Suporte/> }/>
                <Route path='/playlist' element={ <Playlist/> }/>\
                <Route path='/login' element={ <Login/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;