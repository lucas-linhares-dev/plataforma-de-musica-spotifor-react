import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Suporte from './pages/Suporte';
import Playlist from './pages/Playlist';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/cadastro" element={ <Cadastro/> }/>
                <Route path='/suporte' element={ <Suporte/> }/>
                <Route path='/playlist' element={ <Playlist/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;