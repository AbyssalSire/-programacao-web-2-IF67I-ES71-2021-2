import React, { useState } from 'react';
import NavBar from '../../components/navbar';
import './login.css';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const dispatch = useDispatch();
    const [carregando, setCarregando] = useState(0);


    async function login(){
        var inputRA;
        var inputPassword;
        inputRA = document.getElementById('inputRA').value 
        inputPassword =  document.getElementById('inputPassword').value
        var resposta = []
        axios({
            method: 'post',
            url: 'http://localhost:5000/pessoa/logar',
            headers: {},
                data: {
                    ra: inputRA,
                    senha: inputPassword
             }
        }).then(() => dispatch({ type: "LOGIN" } )).catch(erro => {
            console.log(JSON.stringify(erro.response.data.error));
            alert(JSON.stringify(erro.response.data.error))
        })
        return JSON.stringify(resposta)
    }


    return (
        <body>
            <NavBar />
            <form className="form-signin mx-auto text-center" action="../paginas/index.html">
                <div className="login-content container p-3 my-3 bg-dark text-white">
                    {
                        useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/'></Redirect> : null
                    }
                    <h1 className="d-flex justify-content-center  mb-3">Login</h1>
                    <div className="form-group row d-flex justify-content-center">
                        <div className="col-xs-4  mb-3">
                            <label>R.A. (Apenas os números)</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control mx-auto" placeholder="Sem a letra 'a'" id="inputRA" />
                        </div>
                    </div>
                    <div className="form-group row d-flex justify-content-center">
                        <div className="col-xs-4 mb-3">
                            <label>Senha</label>
                            <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control mx-auto" placeholder="Coloque sua senha" id="inputPassword" />
                        </div>
                    </div>
                    <div className="text-center mb-3">
                        {
                            carregando ? <div className="spinner-border text-secondary" role="status"><span className="sr-only"></span></div>
                                : <button className="btn btn-login" type="button" onClick={login}
                                   >Entrar</button>
                        }
                    </div>
                </div>
            </form>
        </body>
    );
}

export default Login;