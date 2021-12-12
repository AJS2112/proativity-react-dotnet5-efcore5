import React from "react";

export const AtividadeForm = props => {
    return (
        <form className="row g-3">

            <div className="col-md-6">
                <label className="form-label">Id</label>
                <input id="id" className="form-control" type="text" readOnly
                    value={Math.max.apply(Math, props.atividades.map(item => item.id)) + 1} />
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
            <button className='btn btn-outline-secondary' onClick={props.addAtividade}>+ Atividade</button>
            {/* <div className='col-12'>
</div> */}
        </form>

    )
}