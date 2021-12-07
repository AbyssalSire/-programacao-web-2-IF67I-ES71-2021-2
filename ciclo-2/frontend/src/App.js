import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import { store, persistor } from '../src/store'
import { PersistGate } from "redux-persist/integration/react";
import './styles.css'

//import paginas

import Home from './view/Home'
import Login from './view/Login'
import ListaPessoas from './view/ListaPessoas'
import ListaDisciplinas from './view/ListaDisciplinas'
import CadastroPessoa from './view/CadastroPessoa'
import CadastroDisciplina from './view/CadastroDisciplina'


function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                    <Router> 
                            <Route exact path='/' component={Home}></Route>
                            <Route exact path='/login' component={Login}></Route>
                            <Route exact path='/listaPessoas' component={ListaPessoas}></Route>
                            <Route exact path='/listaDisciplinas' component={ListaDisciplinas}></Route>
                            <Route exact path='/cadastroPessoa' component={CadastroPessoa}></Route>
                            <Route exact path='/cadastroDisciplina' component={CadastroDisciplina}></Route>
                    </Router>
            </PersistGate>
        </Provider>
    );
}



export default App;
