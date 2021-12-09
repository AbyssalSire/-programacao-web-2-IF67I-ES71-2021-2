import React, { useEffect, useState } from 'react';
import ListaDisciplinas from '../../components/listaDisciplinas';
import NavBar from '../../components/navbar';
import './listaDisciplinas.css';

import api from '../../api'



function ListaDisciplina() {
    const [disciplina, setDisciplina] = useState([]);

    async function teste(){
        var resposta = []
        resposta = await api.get('/disciplina/listar')
        // .then(resposta => {document.getElementById("p").textContent  += JSON.stringify(resposta.data)})
        // .then(this.setState({resultado: resposta}))
        // resposta.then(console.log(resposta))
        // this.setState({resultado: resposta})
        return JSON.stringify(resposta)
    }
    var listaDeDisciplina = [];

    useEffect(async () => {
            await api.get('/disciplina/listar').then(async (resposta) => {
            await Object.values(resposta.data)
            // await resposta.docs
            .forEach((doc) => {
                //console.log(doc);
                listaDeDisciplina.push({
                    id: doc.__id,
                    nomeDisciplina: doc.nomeDisciplina,
                    alunoRA: doc.alunoRA,
                    codigo: doc.codigo
                });
            })
            setDisciplina(
                listaDeDisciplina
            );
        })

            //console.log(resposta.data)

    }, []);
    // var resposta2 = async () => {
    //     await api.get('/disciplina/listar')
    // console.log(resposta2)}
    return (
        <body>
            <NavBar />
            <div className=" bg-dark text-white agendamentos-content">
                <h2>Lista de Disciplinas</h2>
                <div className="disciplinas">
                    {console.log(disciplina)}
                    {disciplina.map((item) => (
                        <ListaDisciplinas
                            nomeDisciplina={item.nomeDisciplina}
                            alunoRA={item.alunoRA}
                            codigo={item.codigo}
                        />
                    ))}
                </div>

            </div>
        </body>
    );
}

export default ListaDisciplina;