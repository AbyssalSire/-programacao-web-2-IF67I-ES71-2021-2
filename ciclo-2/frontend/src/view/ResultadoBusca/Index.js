import React, { useEffect, useState } from 'react';
import ListaDePessoas from '../../components/listaPessoas';
import ListaDePessoas from '../../components/listaDisciplinas';
import NavBar from '../../components/navbar';
import './resultadoBusca.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

import api from '../../api'



function ({tipoBusca, dados[]}) {
    const [pessoa, setPessoa] = useState([]);

    async function teste(){
        var resposta = []
        resposta = await api.get('/pessoa/listar')
        // .then(resposta => {document.getElementById("p").textContent  += JSON.stringify(resposta.data)})
        // .then(this.setState({resultado: resposta}))
        // resposta.then(console.log(resposta))
        // this.setState({resultado: resposta})
        return JSON.stringify(resposta)
    }
    var listaDePessoa = [];

    useEffect(async () => {
            await api.get('/pessoa/listar').then(async (resposta) => {
            await Object.values(resposta.data)
            // await resposta.docs
            .forEach((doc) => {
                //console.log(doc);
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
        })

    }, []);
    return (
        <body>
            <NavBar />
            <div className=" bg-dark text-white agendamentos-content">
                <h2>Lista de Alunos</h2>
                <div className="pessoas">
                    {console.log(pessoa)}
                    {pessoa.map((item) => (
                        <ListaDePessoas
                            nome={item.nome}
                            curso={item.curso}
                            senha={item.senha}
                            ra={item.ra}
                        />
                    ))}
                </div>

            </div>
        </body>
    );
}

export default ListaPessoas;