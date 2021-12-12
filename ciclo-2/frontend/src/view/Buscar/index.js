import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../../components/navbar';
import axios from 'axios';
import api from '../../api'
import ListaDePessoas from '../../components/listaPessoas';

import $ from 'jquery';

import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Buscar() {

    const [pessoa, setPessoa] = useState([]);
    const [stringBusca, setStringBusca] = useState();
    const dispatch = useDispatch();
    const [carregando, setCarregando] = useState(0);
    const [tipoBusca, setTipoBusca] = useState();
    const [houveBusca, sethouveBusca] = useState(false);


    async function busca() {
        var stringBusca
        var tipoBusca;
        stringBusca = document.getElementById('stringBusca').value
        tipoBusca = document.getElementById('tipoBusca').value
        var urlClassebusca = ''
        var urlTipoBusca = ''

        switch (tipoBusca) {
            case "aluno-nome":
                urlClassebusca = 'pessoa/'
                urlTipoBusca = 'pesquisar/nome/'
                break;
            case "aluno-curso":
                urlClassebusca = 'pessoa/'
                urlTipoBusca = 'pesquisar/curso/'
                break;
            case "aluno-ra":
                urlClassebusca = 'pessoa/'
                urlTipoBusca = 'pesquisar/curso/'
                break;
            case "disciplina-nome":
                urlClassebusca = 'disciplina/'
                urlTipoBusca = 'pesquisar/nome/'
                break;
            case "disciplina-codigo":
                urlClassebusca = 'disciplina/'
                urlTipoBusca = 'pesquisar/nome/'
                break;
            case "disciplina-nome":
                urlClassebusca = 'disciplina/'
                urlTipoBusca = 'pesquisar/nome/'
                break;

            default:
                break;
        }

        var resposta = []
        resposta = await api.get(urlClassebusca + urlTipoBusca + stringBusca).catch((error)=>{alert('Erro na busca: '+error.message);window.location.href="http://localhost:3000/Buscar";})
        if (resposta.data.length > 0) {
            console.log('foi');

            switch (urlClassebusca) {
                case 'pessoa/':
                    var listaDePessoa = [];
                    Object.values(resposta.data)
                        .forEach((doc) => {
                            listaDePessoa.push({
                                id: doc.__id,
                                nome: doc.nome,
                                curso: doc.curso,
                                senha: doc.senha,
                                ra: doc.ra
                            });
                        })
                    setPessoa(
                        listaDePessoa
                    );
                    break;
                case 'disciplina/':

                    break;

                default:
                    break;
            }
        }
        alert('Busca completa, por favor verificar resultado apertando F12, não fui capaz de adicionar elementos na página de forma dinâmica');
        console.log(resposta.data);
    }


    return (

        <body>
            <NavBar />
            <form className="form-signin mx-auto text-center" action="../paginas/index.html">
                <div className="login-content container p-3 my-3 bg-dark text-white">
                    {
                        useSelector(state => state.usuarioLogado) != 1 ? <Redirect to='/'></Redirect> : null
                    }
                    <h1 className="d-flex justify-content-center  mb-3">Buscar</h1>
                    <div className="form-group row d-flex justify-content-center">
                        <div className="form-group row d-flex justify-content-center">
                            <div className="col-xs-4 mb-3">
                                <div className="form-group row d-flex justify-content-center">
                                    <div className="col-xs-4 mb-3">
                                        <label>O que buscar?</label>
                                        <input onChange={(e) => setStringBusca(e.target.value)} type="text" className="form-control mx-auto" placeholder="String de busca" id="stringBusca" />
                                        <label for="enunciado">Tipo de busca:</label>
                                    </div>
                                    <select onChange={(e) => setTipoBusca(e.target.value)} name="tipoBusca" id="tipoBusca" className="form-control mx-auto">
                                        <option disabled selected value>-- Selecione uma categoria --</option>
                                        <option value="aluno-nome">Aluno, pesquisa por NOME</option>
                                        <option value="aluno-curso">Aluno, pesquisa por CURSO</option>
                                        <option value="aluno-ra">Aluno, pesquisa por RA</option>
                                        <option value="disciplina-nome">Disciplina, pesquisa por NOME DE DISCIPLINA</option>
                                        <option value="disciplina-codigo">Disciplina, pesquisa por CÓDIGO DE DISCIPLINA</option>
                                        <option value="disciplina-ra">Disciplina, pesquisa por RA DE ALUNO</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-3">
                        {
                            carregando ? <div className="spinner-border text-secondary" role="status"><span className="sr-only"></span></div>
                                : <button className="btn btn-login" type="button" onClick={busca}
                                >Pesquisar</button>
                        }
                    </div>


                    {pessoa.map((item) => (
                        <ListaDePessoas
                            nome={item.nome}
                            curso={item.curso}
                            senha={item.senha}
                            ra={item.ra}
                        />
                    ))}
                </div>
            </form>
        </body>
    );
}

export default Buscar;