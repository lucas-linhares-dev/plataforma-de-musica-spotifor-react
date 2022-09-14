import React from "react";
import { Link } from 'react-router-dom'

import("../projeto-plataforma-de-musica-spotifor/css/suporte.css")
import("../projeto-plataforma-de-musica-spotifor/css/header.css")
import("../projeto-plataforma-de-musica-spotifor/css/footer.css")

function suporte(){
    return(
        <div>
            <header>
                <h1>Spotifor</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/suporte">Suporte</Link></li>
                        <li><Link to="/cadastro">Cadastre-se</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <h2>Perguntas mais frequentes</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Numeração</th>
                            <th>Descrição</th>
                            <th>Acessar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Como salvar uma musica?</td>
                            <td><button>Acessar</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Como salvar uma musica?</td>
                            <td><button>Acessar</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Como salvar uma musica?</td>
                            <td><button>Acessar</button></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Como salvar uma musica?</td>
                            <td><button>Acessar</button></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Como salvar uma musica?</td>
                            <td><button>Acessar</button></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Como salvar uma musica?</td>
                            <td><button>Acessar</button></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Como salvar uma musica?</td>
                            <td><button>Acessar</button></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Como salvar uma musica?</td>
                            <td><button>Acessar</button></td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <footer>
                <p>Todos os direitos reservados</p>
            </footer>
        </div>
    )
}

export default suporte;