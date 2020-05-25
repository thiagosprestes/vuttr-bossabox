import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ModalContainer } from './styles';

import { ReactComponent as CloseIcon } from '../../assets/icon-close.svg';

import { Container, Modal } from '../Modal';
import { Alert } from '../Alert';

import api from '../../services/api';

export default function RemoveModal({ closeModal }) {
    // Define o estado inicial dos erros
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    // Busca informações da ferramenta que estãp salvas no store
    const selector = useSelector((state) => state.toolData);

    // Apaga a ferramenta de acordo com o id
    async function handleDelete() {
        try {
            await api.delete(`/tools/${selector.id}`);

            // Limpa os erros em caso de sucesso
            setError(false);

            // Envia o id da ferramenta selecionada ao store
            dispatch({ type: 'DELETE_TOOL', toolId: selector.id });

            // Fecha o modal
            closeModal();
        } catch (err) {
            // Define o estado dos erros para verdadeiro caso existam
            setError(true);
        }
    }

    return (
        <Container>
            <Modal modalWidth="30">
                <ModalContainer>
                    <header>
                        <CloseIcon />
                        <h2>Remove tool</h2>
                    </header>
                    <p>Are you sure you want to remove {selector.title}?</p>
                    {error && <Alert>An error occurred on delete tool</Alert>}
                    <div>
                        <button
                            type="button"
                            className="cancel"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="confirm"
                            onClick={handleDelete}
                        >
                            Yes, remove
                        </button>
                    </div>
                </ModalContainer>
            </Modal>
        </Container>
    );
}
