import { useState, useEffect } from 'react';
import './App.css';

import { AtividadeForm } from './components/AtividadeForm';
import { AtividadeLista } from './components/AtividadeLista';

import api from './api/atividade';

function App() {
  const [index, setIndex] = useState(0);
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({ id: 0 });

  const pegaTodasAtividades = async () => {
    const response = await api.get('atividade');
    return response.data;
  }

  useEffect(() => {
    const getAtividades = async () => {
      const todasAtividades = await pegaTodasAtividades();
      if (todasAtividades) setAtividades(todasAtividades);

    }
    getAtividades();
  }, [])

  const deletarAtividade = (id) => {
    const atividadesFiltradas = atividades.filter(a => a.id !== id);
    setAtividades([...atividadesFiltradas]);
  }

  const pegarAtividade = (id) => {
    const atividade = atividades.filter(a => a.id === id);
    setAtividade(atividade[0]);
  }

  const addAtividade = (ativ) => {

    setAtividades([...atividades, { ...atividade, id: index }]);
  }

  const atualizarAtividade = (ativ) => {
    setAtividades(atividades.map(item => item.id === ativ.id ? ativ : item));
    setAtividade({ id: 0 });
  }

  const cancelarAtividade = () => {
    setAtividade({ id: 0 });
  }



  return (
    <>
      <h1>React .NETCore EfCore</h1>
      <AtividadeForm
        atividades={atividades}
        atividadeSelecionada={atividade}
        atualizarAtividade={atualizarAtividade}
        addAtividade={addAtividade}
        cancelarAtividade={cancelarAtividade}
      />
      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
      />
    </>

  );
}

export default App;
