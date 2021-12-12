import { useState } from 'react';
import './App.css';

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
      <form className="row g-3">

        <div className="col-md-6">
          <label className="form-label">Id</label>
          <input id="id" className="form-control" type="text" readOnly
            value={Math.max.apply(Math, atividades.map(item => item.id)) + 1} />
        </div>

        <div className='col-md-6'>
          <label className='form-label'>Prioridade</label>
          <select id="prioridade" className='form-select'>
            <option defaultValue="0">Selecionar...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>


          </select>
        </div>

        <div className='col-md-6'>
          <label className='form-label'>Titulo</label>
          <input id="titulo" className='form-control' type="text" />
        </div>

        <div className='col-md-6'>
          <label className='form-label'>Descricao</label>
          <input id="descricao" className='form-control' type="text" />
        </div>

        <hr />
        <button className='btn btn-outline-secondary' onClick={addAtividade}>+ Atividade</button>
        {/* <div className='col-12'>
        </div> */}
      </form>

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
