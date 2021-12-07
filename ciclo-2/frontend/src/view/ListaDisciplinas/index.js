import React from 'react';
//import './home.css'
import { Link } from 'react-router-dom';
import NavBar from '../../components/navbar';
import { useSelector, useDispatch } from 'react-redux';

function ListaDisciplinas() {
    const dispatch = useDispatch();
    return (
        <body>
            <NavBar/>
            <p>ListaDisciplinas</p>
        </body>
    );

}
export default ListaDisciplinas;