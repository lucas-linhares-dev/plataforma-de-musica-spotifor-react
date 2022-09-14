import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Suporte from './pages/Suporte';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/cadastro" element={ <Cadastro/> }/>
                <Route path='/suporte' element={ <Suporte/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;