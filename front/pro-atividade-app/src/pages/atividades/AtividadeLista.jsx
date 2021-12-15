import React from "react";
import { AtividadeItem } from './AtividadeItem';

export const AtividadeLista = props => {
    return (
        <div className="mt-3">
            {props.atividades.map(a => (
                <AtividadeItem
                    key={a.id}
                    a={a}
                    handleConfirmModal={props.handleConfirmModal}
                    pegarAtividade={props.pegarAtividade}
                />

            ))}
        </div>
    )
}