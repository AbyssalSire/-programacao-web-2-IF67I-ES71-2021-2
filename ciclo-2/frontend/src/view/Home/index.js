import React, { Component } from 'react';
import './home.css'
import { Link } from 'react-router-dom';
import NavBar from '../../components/navbar';
import api from '../../api'
import { useSelector, useDispatch } from 'react-redux';

class Home extends Component {


    teste = async () => {
        var resposta = []
        resposta = await api.get('pessoa/listar')
        // .then(this.setState({resultado: resposta}))
        // resposta.then(console.log(resposta))
        // this.setState({resultado: resposta})
        console.log(resposta.data)
    }

    render() {
        return (
            <body>

                <NavBar />
                <div className="container p-3 my-3 bg-dark text-white home-content" id="index-geral">
                    <div className="container-titulo">
                        <h1 className="text-center">Atividade de Programação Web 2 - Ciclo 2</h1>
                    </div>
                    <br />
                    <br />
                    <div className="home-content-div container-texto">
                        <p className="text-left">Objetivo do site: Fazer cadastro de alunos e alunos em disciplinas, onde múltiplos alunos podem fazer a mesma disciplina, assim como o mesmo aluno pode estar em diversas disciplinas.
                        </p>
                    </div>
                    <div className="home-content-div container-texto">
                        <p className="text-right">Lista de tecnologias
                        </p>

                        <ul>
                            <li>DotEnv</li>
                            <li>Express</li>
                            <li>Mongoose</li>
                            <li>React</li>
                            <li>React-dom</li>
                            <li>React-router-dom</li>
                            <li>React-scripts</li>
                            <li>Redux</li>
                            <li>Redux-persist</li>
                            <li>Web Vitals</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="home-content-div container-texto">
                        <Link to="listaDisciplinas"><button className="btn btn-info container-btn mx-auto" id="todos">Lista de Disciplinas</button></Link>

                        <Link to="listaPessoas"><button className="btn btn-info container-btn mx-auto" id="todos">Lista de Pessoas</button></Link>
                        {/* <button className="btn btn-info container-btn mx-auto" id="todos" onClick={() => this.teste()}>Teste API</button> */}
                    </div>
                    <br />
                    <br />



                </div>
            </body>
        );
    }

}
export default Home;