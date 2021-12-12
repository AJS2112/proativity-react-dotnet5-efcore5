import { useState } from 'react';
import './App.css';


import { AtividadeForm } from './components/AtividadeForm';
import { AtividadeLista } from './components/AtividadeLista';

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



  return (
    <>
      <h1>React .NETCore EfCore</h1>
      <AtividadeForm
        atividades={atividades}
        addAtividade={addAtividade}
      />
      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
      />
    </>

  );
}

export default App;
