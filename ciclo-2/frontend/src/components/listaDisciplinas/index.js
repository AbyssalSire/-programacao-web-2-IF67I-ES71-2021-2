import React from 'react';
import './listaDisciplinas.css';

function ListaDisciplinas({
  nomeDisciplina,
  alunoRA,
  codigo,
}) {
  function editar(){
    alert('Função de editar implementada no back-end, infelizmente não foi implementada no front');
    window.location.href="http://localhost:3000/ListaPessoas"
};
  function excluir(){
    alert('Função de excluir implementada no back-end, infelizmente não foi implementada no front');
    window.location.href="http://localhost:3000/ListaPessoas"
};
  return (
    <div className={`cartao`}>
      <div>
        <h5>nomeDisciplina: {nomeDisciplina}</h5>
        <p className="conteudo-agendamento">
          Aluno: {alunoRA} <br />
          Código Disciplina: {codigo} <br />
        </p>
        <button onClick={editar}>Editar</button>
        <button onClick={excluir}>Excluir</button>
      </div>
    </div>
  );
}

export default ListaDisciplinas;