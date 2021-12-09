import React, { useState } from 'react';
import NavBar from '../../components/navbar';
import axios from 'axios';

import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function CadastroDisciplina() {

    const [nomeDisciplina, setNomeDisciplina] = useState();
    const [codigo, setCodigo] = useState();
    const [alunoRA, setAlunoRA] = useState();
    const [curso, setCurso] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const dispatch = useDispatch();
    const [carregando, setCarregando] = useState(0);


    async function cadastro() {
        var inputNomeDisciplina
        var inputCodigo;
        var inputAlunoRA;
        inputNomeDisciplina = document.getElementById('inputNomeDisciplina').value
        inputAlunoRA = document.getElementById('inputAlunoRA').value
        inputCodigo = document.getElementById('inputCodigo').value
        axios({
            method: 'post',
            url: 'http://localhost:5000/disciplina/criar',
            headers: {},
            data: {
                nomeDisciplina: inputNomeDisciplina,
                alunoRA: inputAlunoRA,
                codigo: inputCodigo
            }
        }).then(() => {
            alert('Aluno cadastrado com sucesso na disciplina!');
            window.location.href="http://localhost:3000/";
        }).catch(erro => {
            console.log(JSON.stringify(erro.response.data.error));
            alert(JSON.stringify(erro.response.data.error))
            window.location.href="http://localhost:3000/CadastroDisciplina"
        })
    }


    return (
        <body>
            <NavBar />
            <form className="form-signin mx-auto text-center" action="../paginas/index.html">
                <div className="login-content container p-3 my-3 bg-dark text-white">
                {
                        useSelector(state => state.usuarioLogado) != 1 ? <Redirect to='/'></Redirect> : null
                    }
                    <h1 className="d-flex justify-content-center  mb-3">Cadastro de aluno em disciplina</h1>
                    <div className="form-group row d-flex justify-content-center">
                        <div className="form-group row d-flex justify-content-center">
                            <div className="col-xs-4 mb-3">
                                <div className="form-group row d-flex justify-content-center">
                                    <div className="col-xs-4 mb-3">
                                        <label>Nome da Disciplina</label>
                                        <input onChange={(e) => setNomeDisciplina(e.target.value)} type="text" className="form-control mx-auto" placeholder="Coloque o nome da disciplina" id="inputNomeDisciplina" />
                                    </div>
                                </div>
                                <div className="form-group row d-flex justify-content-center">
                                    <div className="col-xs-4 mb-3">
                                        <label>Ra do aluno (sem a letra 'a')</label>
                                        <input onChange={(e) => setAlunoRA(e.target.value)} type="number" className="form-control mx-auto" placeholder="Coloque RA do aluno" id="inputAlunoRA" />
                                    </div>
                                </div>
                                <label>Código do Curso</label>
                                <input onChange={(e) => setCodigo(e.target.value)} type="text" className="form-control mx-auto" placeholder="Coloque o Código do Curso" id="inputCodigo" />
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-3">
                        {
                            carregando ? <div className="spinner-border text-secondary" role="status"><span className="sr-only"></span></div>
                                : <button className="btn btn-login" type="button" onClick={cadastro}
                                >Cadastrar</button>
                        }
                    </div>

                </div>
            </form>
        </body>
    );
}

export default CadastroDisciplina;