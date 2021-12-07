import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './navbar.css'

function NavBar() {
    const dispatch = useDispatch();
    function contato(){
        alert('Para entrar em contato com o criador: lucmalheiros@gmail.com');
    };
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="nav-link active">Página inicial</ Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                useSelector(state => state.usuarioLogado) > 0 ?
                                    <>
                                        <li className="nav-item">
                                            <Link to="cadastroDisciplina" className="nav-link active">Cadastrar Disciplina</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="cadastcadastroPessoa" className="nav-link active">Cadastrar aluno</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="listaDisciplinas" className="nav-link active">Lista de Disciplinas</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="listaOEssiaso" className="nav-link active">Lista de Pessoas</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link onClick={() => dispatch({ type: "LOGOUT" })} className="nav-link active">Sair</Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link onClick={contato} id="contato" className="nav-link active">Contato</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="login" className="nav-link active">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="cadastroPessoa" className="nav-link active">Cadastrar</Link>
                                        </li>
                                    </>

                            }
                        </ul>

                    </div>
                </div>
            </nav>

        </header>
    )
}

export default NavBar;