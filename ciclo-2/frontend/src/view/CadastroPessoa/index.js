import React from 'react';
//import './home.css'
import { Link } from 'react-router-dom';

import NavBar from '../../components/navbar';
import { useSelector, useDispatch } from 'react-redux';

function CadastroPessoa() {
    return (
        <body>
            <NavBar />
            <p>CadastroPessoa</p>
        </body>
    );

}
export default CadastroPessoa;