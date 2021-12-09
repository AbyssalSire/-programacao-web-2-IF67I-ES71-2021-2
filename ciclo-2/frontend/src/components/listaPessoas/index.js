import React from 'react';
import './listaPessoas.css';

function ListaPessoas({
  nome,
  curso,
  senha,
  ra
}) {
  return (
    <div className={`cartao`}>
      <div>
        <h5>Aluno: {nome}</h5>
        <p className="conteudo-agendamento">
          Curso: {curso} <br />
          Senha: {senha} <br />
          R.A.: {ra} <br />
        </p>
        <button>Editar</button>
        <button>Excluir</button>
      </div>
    </div>
  );
}

export default ListaPessoas;