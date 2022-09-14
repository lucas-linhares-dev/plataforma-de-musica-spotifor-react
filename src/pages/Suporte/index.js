import React from "react";
import Header from "../../header";
import Footer from "../../footer";

import("../projeto-plataforma-de-musica-spotifor/css/suporte.css")

function suporte(){
    return(
        <div>
            <Header/>
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
            <Footer/>
        </div>
    )
}

export default suporte;