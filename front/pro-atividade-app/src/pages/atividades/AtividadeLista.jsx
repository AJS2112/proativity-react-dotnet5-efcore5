import React from "react";
import { Atividade } from './Atividade';

export const AtividadeLista = props => {
    return (
        <div className="mt-3">
            {props.atividades.map(a => (
                <Atividade
                    key={a.id}
                    a={a}
                    handleConfirmModal={props.handleConfirmModal}
                    pegarAtividade={props.pegarAtividade}
                />

            ))}
        </div>
    )
}