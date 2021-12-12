import React from 'react';
import './listaPessoas.css';

function ListaPessoas({
  nome,
  curso,
  senha,
  ra
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
        <h5>Aluno: {nome}</h5>
        <p className="conteudo-agendamento">
          Curso: {curso} <br />
          Senha: {senha} <br />
          R.A.: {ra} <br />
        </p>
        <button onClick={editar}>Editar</button>
        <button onClick={excluir}>Excluir</button>
      </div>
    </div>
  );
}

export default ListaPessoas;