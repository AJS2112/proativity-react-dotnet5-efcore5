import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './App.css';

import { AtividadeForm } from './components/AtividadeForm';
import { AtividadeLista } from './components/AtividadeLista';

import api from './api/atividade';

function App() {
  const [showAtividadeModal, setShowAtividadeModal] = useState(false);
  const [atividades, setAtividades] = useState([]);
  const [atividade, setAtividade] = useState({ id: 0 });


  const handleAtividadeModal = () => setShowAtividadeModal(!showAtividadeModal);

  const novaAtividade = () => {
    setAtividade({ id: 0 });
    handleAtividadeModal();
  }

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
    console.log(atividades)
  }, [])


  const pegarAtividade = (id) => {
    const atividade = atividades.filter(a => a.id === id);
    setAtividade(atividade[0]);
    handleAtividadeModal();
  }

  const addAtividade = async (ativ) => {
    const response = await api.post('atividade', ativ);
    setAtividades([...atividades, response.data]);
    handleAtividadeModal();
  }

  const atualizarAtividade = async (ativ) => {
    const response = await api.put(`atividade/${ativ.id}`, ativ);
    const { id } = response.data;
    setAtividades(atividades.map(item => item.id === id ? response.data : item));
    setAtividade({ id: 0 });
    handleAtividadeModal();
  }

  const deletarAtividade = async (id) => {
    if (await api.delete(`atividade/${id}`)) {
      const atividadesFiltradas = atividades.filter(a => a.id !== id);
      setAtividades([...atividadesFiltradas]);
    }
  }

  const cancelarAtividade = () => {
    setAtividade({ id: 0 });
    handleAtividadeModal();
  }



  return (
    <>
      <h1>React .NETCore EfCore</h1>
      <div className='d-flex justify-content-between align-items-end mt-2 pb-3 border-bottom border-1'>
        <h1 className='m-0 p-0'>Atividade: {atividade.id !== 0 ? atividade.id : ''}</h1>
        <Button variant="outline-secondary" onClick={novaAtividade}>
          <i className='fas fa-plus'></i>
        </Button>

      </div>
      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
        pegarAtividade={pegarAtividade}
      />

      <Modal show={showAtividadeModal} onHide={handleAtividadeModal}>
        <Modal.Header closeButtons>
          <Modal.Title>
            Atividade: {atividade.id !== 0 ? atividade.id : ''}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AtividadeForm
            atividades={atividades}
            atividadeSelecionada={atividade}
            atualizarAtividade={atualizarAtividade}
            addAtividade={addAtividade}
            cancelarAtividade={cancelarAtividade}
          />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Lauch</Button>
          <Button variant="primary" onClick={handleClose}>Lauch</Button>

        </Modal.Footer> */}
      </Modal>

    </>

  );
}

export default App;
