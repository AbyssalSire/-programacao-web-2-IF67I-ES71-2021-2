import React, { useState } from 'react';
import NavBar from '../../components/navbar';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';

function Login() {

    const [nome, setNome] = useState();
    const [senha, setSenha] = useState();
    const [ra, setRA] = useState();
    const [curso, setCurso] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const dispatch = useDispatch();
    const [carregando, setCarregando] = useState(0);


    async function cadastro() {
        var inputNome
        var inputCurso
        var inputPassword;
        var inputRA;
        inputNome = document.getElementById('inputNome').value
        inputCurso = document.getElementById('inputCurso').value
        inputRA = document.getElementById('inputRA').value
        inputPassword = document.getElementById('inputPassword').value
        console.log(inputRA);
        axios({
            method: 'post',
            url: 'http://localhost:5000/pessoa/criar',
            headers: {},
            data: {
                nome: inputNome,
                curso: inputCurso,
                ra: inputRA,
                senha: inputPassword
            }
        }).then(alert('Aluno cadastrado com sucesso!')).then(window.location.href="http://localhost:3000/").catch(erro => {
            console.log(JSON.stringify(erro.response.data.error));
            alert(JSON.stringify(erro.response.data.error))
        })
    }


    return (
        <body>
            <NavBar />
            <form className="form-signin mx-auto text-center" action="../paginas/index.html">
                <div className="login-content container p-3 my-3 bg-dark text-white">
                    <h1 className="d-flex justify-content-center  mb-3">Cadastro de novo aluno</h1>
                    <div className="form-group row d-flex justify-content-center">
                        <div className="form-group row d-flex justify-content-center">
                            <div className="col-xs-4 mb-3">
                                <div className="form-group row d-flex justify-content-center">
                                    <div className="col-xs-4 mb-3">
                                        <label>Nome</label>
                                        <input onChange={(e) => setNome(e.target.value)} type="text" className="form-control mx-auto" placeholder="Coloque o nome" id="inputNome" />
                                    </div>
                                </div>
                                <div className="form-group row d-flex justify-content-center">
                                    <div className="col-xs-4 mb-3">
                                        <label>Curso</label>
                                        <input onChange={(e) => setCurso(e.target.value)} type="text" className="form-control mx-auto" placeholder="Coloque o curso" id="inputCurso" />
                                    </div>
                                </div>
                                <label>Senha</label>
                                <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control mx-auto" placeholder="Coloque a senha" id="inputPassword" />
                            </div>
                        <div className="col-xs-4  mb-3">
                            <label>R.A. (Apenas os números)</label>
                            <input onChange={(e) => setRA(e.target.value)} type="number" className="form-control mx-auto" placeholder="Sem a letra 'a'" id="inputRA" />
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

export default Login;