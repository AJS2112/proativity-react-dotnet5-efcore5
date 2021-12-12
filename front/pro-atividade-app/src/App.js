import { useState } from 'react';
import './App.css';

let initialState = [
  { id: 1, descricao: "Primeira atividade" },
  { id: 2, descricao: "Segunda atividade" }
];

function App() {
  const [atividades, setAtividades] = useState(initialState);

  const addAtividade = (e) => {
    e.preventDefault();
    const atividade = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value,
    }
    setAtividades([...atividades, { ...atividade }]);
  }
  return (
    <>
      <h1>React .NETCore EfCore</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label for="id" className="form-label">Id</label>
          <input id="id" className="form-control" type="text" placeholder="id" />
        </div>
        <div className='col-md-6'>
          <label for="descricao" className='form-label'>Descricao</label>
          <input id="descricao" className='form-control' type="text" placeholder="descricao" />
        </div>
        <hr />
        <button className='btn btn-outline-sencondary' onClick={addAtividade}>+ Atividade</button>
        {/* <div className='col-12'>
        </div> */}
      </form>

      <div className="mt-3">
        {atividades.map(a => (
          <div key={a.id} className='card mb-2 shadow-sm' >
            <div className='card-body'>
              <p className='card-text'>{a.id} - {a.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </>

  );
}

export default App;
