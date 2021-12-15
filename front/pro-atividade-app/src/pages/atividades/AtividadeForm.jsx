import { useState, useEffect } from "react";

const atividadeInicial = {
    id: 0,
    titulo: '',
    prioridade: '0',
    descricao: ''
}

export const AtividadeForm = props => {
    const atividadeAtual = () => {
        if (props.atividadeSelecionada.id !== 0) {
            return props.atividadeSelecionada
        } else {
            return atividadeInicial;
        }
    }

    const handlerCancelar = (e) => {
        e.preventDefault();
        props.cancelarAtividade();
        setAtividade(atividadeInicial);
    }

    const handlerSubmit = (e) => {
        e.preventDefault();

        if (props.atividadeSelecionada.id !== 0) {
            props.atualizarAtividade(atividade);
        } else {
            props.addAtividade(atividade);
        }

        setAtividade(atividadeInicial);
    }

    const [atividade, setAtividade] = useState(atividadeAtual());

    useEffect(() => {
        if (props.atividadeSelecionada.id !== 0) {
            setAtividade(props.atividadeSelecionada);
        }
    }, [props.atividadeSelecionada])

    const inputTextHandler = (e) => {
        const { name, value } = e.target;
        setAtividade({ ...atividade, [name]: value });
    }



    return (
        <>

            <form className="row g-3" onSubmit={handlerSubmit}>

                <div className='col-md-6'>
                    <label className='form-label'>Titulo</label>
                    <input id="titulo" name="titulo" className='form-control' type="text"
                        value={atividade.titulo}
                        onChange={inputTextHandler}
                    />
                </div>

                <div className='col-md-6'>
                    <label className='form-label'>Prioridade</label>
                    <select
                        id="prioridade" name="prioridade" className='form-select'
                        value={atividade.prioridade}
                        onChange={inputTextHandler}
                    >
                        <option defaultValue="0">Selecionar...</option>
                        <option value="1">Baixa</option>
                        <option value="2">Normal</option>
                        <option value="3">Alta</option>


                    </select>
                </div>



                <div className='col-md-12'>
                    <label className='form-label'>Descricao</label>
                    <textarea id="descricao" name="descricao" className='form-control' type="text"
                        value={atividade.descricao}
                        onChange={inputTextHandler}
                    />
                    <hr />
                </div>

                <div className='col-12 mt-0'>
                    {
                        atividade.id === 0 ? (

                            <button className='btn btn-outline-success' type="submit">
                                <i className="fas fa-plus me-2"></i>
                                Salvar
                            </button>
                        ) : (
                            <>
                                <button className='btn btn-outline-success me-2' type="submit">
                                    <i className="fas fa-plus me-2"></i>
                                    Salvar
                                </button>
                                <button className='btn btn-outline-warning' onClick={handlerCancelar}>
                                    <i className="fas fa-trash me-2"></i>
                                    Cancelar
                                </button>
                            </>

                        )
                    }

                </div>
            </form>
        </>
    )
}