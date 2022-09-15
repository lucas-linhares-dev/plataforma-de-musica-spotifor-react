import React, { useState } from 'react';
import Header from "../../header";
import Footer from "../../footer";

import("../projeto-plataforma-de-musica-spotifor/css/suporte.css")

function Suporte(){

    const [resposta1, setResposta1] = useState("Resposta 1")
    const [resposta2, setResposta2] = useState("Resposta 2")
    const [resposta3, setResposta3] = useState("Resposta 3")
    const [resposta4, setResposta4] = useState("Resposta 4")
    const [resposta5, setResposta5] = useState("Resposta 5")
    const [resposta6, setResposta6] = useState("Resposta 6")
    const [resposta7, setResposta7] = useState("Resposta 7")
    const [resposta8, setResposta8] = useState("Resposta 8")

    function exibirResposta1(){
        setResposta1("Clique no botão inferior direito")
    }
    function exibirResposta2(){
        setResposta2("Entre em contato com o suporte")
    }
    function exibirResposta3(){
        setResposta3("Olhe para cima")
    }
    function exibirResposta4(){
        setResposta4("Olhe para o lado")
    }
    function exibirResposta5(){
        setResposta5("Olhe para o outro lado")
    }
    function exibirResposta6(){
        setResposta6("Olhe para baixo")
    }
    function exibirResposta7(){
        setResposta7("Dê tres pulinhos")
    }
    function exibirResposta8(){
        setResposta8("Tenha fé")
    }

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
                            <th>Resposta</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Como salvar uma musica?</td>
                            <td><button type="button" onClick={exibirResposta1}>Acessar</button></td>
                            <td className="resposta">{resposta1}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Como salvar uma musica?</td>
                            <td><button type="button" onClick={exibirResposta2}>Acessar</button></td>
                            <td className="resposta">{resposta2}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Como salvar uma musica?</td>
                            <td><button type="button" onClick={exibirResposta3}>Acessar</button></td>
                            <td className="resposta">{resposta3}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Como salvar uma musica?</td>
                            <td><button type="button" onClick={exibirResposta4}>Acessar</button></td>
                            <td className="resposta">{resposta4}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Como salvar uma musica?</td>
                            <td><button type="button" onClick={exibirResposta5}>Acessar</button></td>
                            <td className="resposta">{resposta5}</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Como salvar uma musica?</td>
                            <td><button type="button" onClick={exibirResposta6}>Acessar</button></td>
                            <td className="resposta">{resposta6}</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Como salvar uma musica?</td>
                            <td><button type="button" onClick={exibirResposta7}>Acessar</button></td>
                            <td className="resposta">{resposta7}</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Como salvar uma musica?</td>
                            <td><button type="button" onClick={exibirResposta8}>Acessar</button></td>
                            <td className="resposta">{resposta8}</td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <Footer/>
        </div>
    )
}

export default Suporte;