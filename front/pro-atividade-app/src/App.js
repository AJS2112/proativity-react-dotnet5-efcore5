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
      <form>
        <input id="id" type="text" placeholder="id" />
        <input id="descricao" type="text" placeholder="descricao" />
        <button onClick={addAtividade}>+ Atividade</button>
      </form>
      <div className="mt-3">
        <h1>React .NETCore EfCore</h1>
        <ul className='list-group'>
          {atividades.map(a => (
            <li key={a.id} className='list-group-item'>{a.id} - {a.descricao}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
