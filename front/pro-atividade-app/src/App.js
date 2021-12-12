import { useState } from 'react';
import './App.css';

import { Atividade } from './components/Atividade';
import { AtividadeForm } from './components/AtividadeForm';

let initialState = [
  { id: 1, prioridade: '1', titulo: 'Titulo', descricao: "Primeira atividade" },
  { id: 2, prioridade: '1', titulo: 'Titulo', descricao: "Segunda atividade" }
];

function App() {
  const [atividades, setAtividades] = useState(initialState);

  const deletarAtividade = (id) => {
    const atividadesFiltradas = atividades.filter(a => a.id !== id);
    setAtividades([...atividadesFiltradas]);
  }

  const addAtividade = (e) => {
    e.preventDefault();
    const atividade = {
      id: document.getElementById('id').value,
      prioridade: document.getElementById('prioridade').value,
      descricao: document.getElementById('descricao').value,
      titulo: document.getElementById('titulo').value,

    }
    setAtividades([...atividades, { ...atividade }]);
  }

  const prioridadeLabel = (param) => {
    switch (param) {
      case '1':
        return 'Baixa';
      case '2':
        return 'Normal';
      case '3':
        return 'Alta';
      default:
        return 'Não definido';
    }
  }

  const prioridadeStyle = (param, icone) => {
    switch (param) {
      case '1':
        return icone ? 'smile' : 'success';
      case '2':
        return icone ? 'meh' : 'dark';
      case '3':
        return icone ? 'frown' : 'warning';
      default:
        return 'Não definido';
    }
  }

  return (
    <>
      <h1>React .NETCore EfCore</h1>
      <AtividadeForm
        atividades={atividades}
        addAtividade={addAtividade}
      />
      <div className="mt-3">
        {atividades.map(a => (

          <div key={a.id} className={'card mb-2 shadow-sm border-' + prioridadeStyle(a.prioridade)} >
            <div className='card-body'>
              <div className='d-flex justify-content-between'>
                <h5 className='card-title'>
                  <span className='badge bg-secondary me-1'>{a.id}</span>
                  {a.titulo}
                </h5>
                <h6>Prioridade:
                  <span className={'ms-1 text-' + prioridadeStyle(a.prioridade)}>
                    <i className={'me-1 far fa-' + prioridadeStyle(a.prioridade, true)}></i>
                    {prioridadeLabel(a.prioridade)}
                  </span>
                </h6>
              </div>
              <p className='card-text'>{a.descricao}</p>
              <div className='d-flex justify-content-end border-top pt-2'>
                <button className='btn btn-outline-primary me-2 btn-sm'>
                  <i className="fas fa-pen me-2"></i>
                  Editar
                </button>
                <button className='btn btn-outline-danger me-2 btn-sm'
                  onClick={() => deletarAtividade(a.id)}>
                  <i className="fas fa-trash me-2"></i>
                  Deletar
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </>

  );
}

export default App;
