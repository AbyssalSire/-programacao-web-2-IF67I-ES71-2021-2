import React from 'react';
import './listaDisciplinas.css';

function ListaDisciplinas({
  nomeDisciplina,
  alunoRA,
  codigo,
}) {
  return (
    <div className={`cartao`}>
      <div>
        <h5>nomeDisciplina: {nomeDisciplina}</h5>
        <p className="conteudo-agendamento">
          Aluno: {alunoRA} <br />
          Código Disciplina: {codigo} <br />
        </p>
        <button>Editar</button>
        <button>Excluir</button>
      </div>
    </div>
  );
}

export default ListaDisciplinas;