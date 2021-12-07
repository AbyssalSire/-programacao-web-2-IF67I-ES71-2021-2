import React from 'react';
//import './home.css'
import { Link } from 'react-router-dom';
import NavBar from '../../components/navbar';
import { useSelector, useDispatch } from 'react-redux';

function ListaPessoas() {
    return (
        <body>
            <NavBar />
            <p>ListaPessoas</p>
        </body>
    );

}
export default ListaPessoas;