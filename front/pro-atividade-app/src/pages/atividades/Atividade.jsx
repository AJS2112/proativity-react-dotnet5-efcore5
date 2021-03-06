import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

import { AtividadeForm } from './AtividadeForm';
import { AtividadeLista } from './AtividadeLista';
import api from './../../api/atividade';

import { TitlePage } from './../../components/TitlePage';

export default function Atividade() {
    const [showAtividadeModal, setShowAtividadeModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const [atividades, setAtividades] = useState([]);
    const [atividade, setAtividade] = useState({ id: 0 });


    const handleAtividadeModal = () => setShowAtividadeModal(!showAtividadeModal);

    const handleConfirmModal = (id) => {
        if (id !== 0 && id !== undefined) {
            const atividade = atividades.filter(a => a.id === id);
            setAtividade(atividade[0]);
        } else {
            setAtividade({ id: 0 });
        }
        setShowConfirmModal(!showConfirmModal)
    };


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
    })


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
        handleConfirmModal(0);
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
            <TitlePage title={"Atividade: " + (atividade.id !== 0 ? atividade.id : '')}>
                <Button variant="outline-secondary" onClick={novaAtividade}>
                    <i className='fas fa-plus'></i>
                </Button>

            </TitlePage>

            <AtividadeLista
                atividades={atividades}
                pegarAtividade={pegarAtividade}
                handleConfirmModal={handleConfirmModal}
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
            </Modal>

            <Modal size="sm" show={showConfirmModal} onHide={handleConfirmModal}>
                <Modal.Header closeButtons>
                    <Modal.Title>
                        Excluindo Atividade: {atividade.id !== 0 ? atividade.id : ''}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tem certeza que deseja excluir a atividade? {atividade.id}
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <Button variant='outline-success' className='me-2' onClick={() => deletarAtividade(atividade.id)}>
                        <i className='fas fa-check me-2'></i>
                        Sim
                    </Button>
                    <Button variant='outline-danger' onClick={() => handleConfirmModal(0)}>
                        <i className='fas fa-times me-2'></i>
                        N??o
                    </Button>
                </Modal.Footer>
            </Modal>

        </>

    );
}


