import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { TitlePage } from "../../components/TitlePage";
const clientes = [
    { id: 1, nome: "Microsoft", resposavel: "Otto", contato: '106654', situacao: 'Ativo' },
    { id: 2, nome: "Amazon", resposavel: "Otto", contato: '434234', situacao: 'Ativo' },
    { id: 3, nome: "Google", resposavel: "Kevin", contato: '8884343', situacao: 'Ativo' },
    { id: 4, nome: "Facebook", resposavel: "Zuckerberg", contato: '423455', situacao: 'Ativo' },
    { id: 5, nome: "Twitter", resposavel: "Jack", contato: '3464356', situacao: 'Ativo' },

]
export const ClienteList = (props) => {
    const history = useHistory();
    const [termoBusca, setTermoBusca] = useState('');


    const clientesFiltrados = clientes.filter((cliente) => {
        //cliente.nome.toLocaleLowerCase().indexOf(termoBusca) !== -1
        return Object.values(cliente)
            .join(' ')
            .toLowerCase()
            .includes(termoBusca.toLowerCase())
    });

    const handleInputChange = (e) => {
        setTermoBusca(e.target.value)

    }
    const novoCliente = () => {
        history.push('/cliente/detalhe')
    }
    return (
        <>
            <TitlePage title="Clientes">
                <Button variant="outline-secondary" onClick={novoCliente}>
                    <i className="fas fa-plus me-2"></i>
                    Novo Cliente
                </Button>
            </TitlePage>
            <InputGroup className="mb-3 mt-3">
                <InputGroup.Text>Buscar</InputGroup.Text>
                <FormControl
                    placeholder="Buscar por nome do cliente"
                    onChange={handleInputChange}
                />
            </InputGroup>
            <table className="table table-striped table-hover">
                <thead className="table-dark mt-3">
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Nome</th>
                        <th scope='col'>Responsavel</th>
                        <th scope='col'>Contato</th>
                        <th scope='col'>Situacao</th>
                        <th scope='col'>Opçoes</th>

                    </tr>
                </thead>
                <tbody>
                    {clientesFiltrados.map((cliente) => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.resposavel}</td>
                            <td>{cliente.contato}</td>
                            <td>{cliente.situacao}</td>
                            <td>
                                <div>
                                    <button className="btn-sm btn-outline-primary me2"
                                        onClick={() => history.push(`/cliente/detalhe/${cliente.id}`)}>
                                        <i className="fas fa-user-edit me-2"></i>
                                        Editar
                                    </button>
                                    <button className="btn-sm btn-outline-danger me2">
                                        <i className="fas fa-user-times me-2"></i>
                                        Desativar
                                    </button>

                                </div>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </>
    );
}