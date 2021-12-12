import React from "react";

export const Atividade = props => {
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
        <div className={'card mb-2 shadow-sm border-' + prioridadeStyle(props.a.prioridade)} >
            <div className='card-body'>
                <div className='d-flex justify-content-between'>
                    <h5 className='card-title'>
                        <span className='badge bg-secondary me-1'>{props.a.id}</span>
                        {props.a.titulo}
                    </h5>
                    <h6>Prioridade:
                        <span className={'ms-1 text-' + prioridadeStyle(props.a.prioridade)}>
                            <i className={'me-1 far fa-' + prioridadeStyle(props.a.prioridade, true)}></i>
                            {prioridadeLabel(props.a.prioridade)}
                        </span>
                    </h6>
                </div>
                <p className='card-text'>{props.a.descricao}</p>
                <div className='d-flex justify-content-end border-top pt-2'>
                    <button className='btn btn-outline-primary me-2 btn-sm'>
                        <i className="fas fa-pen me-2"></i>
                        Editar
                    </button>
                    <button className='btn btn-outline-danger me-2 btn-sm'
                        onClick={() => props.deletarAtividade(props.a.id)}>
                        <i className="fas fa-trash me-2"></i>
                        Deletar
                    </button>

                </div>
            </div>
        </div>
    )
}