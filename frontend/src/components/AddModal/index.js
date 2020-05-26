import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { ModalContainer } from './styles';

import { ReactComponent as PlusIcon } from '../../assets/icon-plus.svg';
import { ReactComponent as CloseIcon } from '../../assets/icon-close.svg';

import { Container, Modal } from '../Modal';

import { Alert } from '../Alert';

import api from '../../services/api';

import * as ToolsActions from '../../store/modules/tools/actions';

export default function AddModal({ toggleModal }) {
    // Define o estado inicial dos inputs com informações da ferramenta
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState([]);
    const [error, setError] = useState(false);

    //  Define o dispatch do redux
    const dispatch = useDispatch();

    // Cria uma nova ferramenta no backend
    async function handleAddTool(e) {
        // Impede o form de executar a ação padrão de submit
        e.preventDefault();

        // Pega os valores presentes nos estados dos inputs
        const data = {
            title,
            link,
            description,
            tags: [tags],
        };

        try {
            // Enviando informações para backend
            await api.post('/tools', data);

            // Fecha modal após envio com sucesso
            toggleModal();

            // Caso existam erros de tentativas de envio anteriores os apaga
            setError(false);

            // Limpa os campos do formulário
            setTitle('');
            setLink('');
            setDescription('');
            setTags('');

            // Envia a informação de que a lista de ferramentas foi a store
            dispatch(ToolsActions.updateToolsList(true));
        } catch (err) {
            // Retorna mensagem de erro caso não consiga enviar informações
            setError(true);
        }
    }

    return (
        <Container>
            <Modal modalWidth="50">
                <ModalContainer>
                    <header>
                        <PlusIcon />
                        <h2>Add new tool</h2>
                        <button type="button" onClick={toggleModal}>
                            <CloseIcon />
                        </button>
                    </header>
                    <form onSubmit={handleAddTool}>
                        <label htmlFor="title">Tool Name</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label htmlFor="link">Tool Link</label>
                        <input
                            type="text"
                            name="link"
                            id="link"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                        <label htmlFor="description">Tool description</label>
                        <textarea
                            name="description"
                            id="description"
                            cols="30"
                            rows="5"
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <label htmlFor="tags">Tags</label>
                        <input
                            type="text"
                            name="tags"
                            id="tags"
                            required
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                        />
                        {error && (
                            <Alert>An error occurred on add new tool</Alert>
                        )}
                        <button type="submit">Add tool</button>
                    </form>
                </ModalContainer>
            </Modal>
        </Container>
    );
}
