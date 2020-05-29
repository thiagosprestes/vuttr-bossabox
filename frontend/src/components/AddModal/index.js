import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';

import { ModalContainer, Input } from './styles';

import { ReactComponent as PlusIcon } from '../../assets/icon-plus.svg';
import { ReactComponent as CloseIcon } from '../../assets/icon-close.svg';

import { Container, Modal } from '../Modal';

import { Alert } from '../Alert';

import api from '../../services/api';

import * as ToolsActions from '../../store/modules/tools/actions';

export default function AddModal({ toggleModal }) {
    // Define o estado inicial dos erros como false
    const [error, setError] = useState(false);

    //  Define o dispatch do redux
    const dispatch = useDispatch();

    // Valida os campos do formulário como obrigatórios
    const validate = (values) => {
        const errors = {};
        if (!values.title) {
            errors.title = 'The title is required';
        }
        if (!values.link) {
            errors.link = 'The link is required';
        }
        if (!values.description) {
            errors.description = 'The description is required';
        }
        if (!values.tags) {
            errors.tags = 'You must insert at least one tag';
        }

        return errors;
    };

    // Define ação do formulário
    const formik = useFormik({
        initialValues: {
            title: '',
            link: '',
            description: '',
            tags: '',
        },
        validate,
        onSubmit: async (values) => {
            const data = {
                title: values.title,
                link: values.link,
                description: values.description,
                tags: values.tags.split(', '),
            };

            try {
                // Enviando informações para backend
                const response = await api.post('/tools', data);

                // Envia a informação de que a lista de ferramentas foi a store
                dispatch(ToolsActions.newTool(response.data));

                // Caso existam erros de tentativas de envio anteriores os apaga
                setError(false);

                // Fecha modal após envio com sucesso
                toggleModal();
            } catch (err) {
                // Retorna mensagem de erro caso não consiga enviar informações
                setError(true);
            }
        },
    });

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
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="title">Tool Name</label>
                        <Input
                            error={formik.errors.title}
                            type="text"
                            name="title"
                            id="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.title ? (
                            <span>{formik.errors.title}</span>
                        ) : null}
                        <label htmlFor="link">Tool Link</label>
                        <Input
                            error={formik.errors.link}
                            type="text"
                            name="link"
                            id="link"
                            value={formik.values.link}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.link ? (
                            <span>{formik.errors.link}</span>
                        ) : null}
                        <label htmlFor="description">Tool description</label>
                        <Input
                            error={formik.errors.description}
                            as="textarea"
                            name="description"
                            id="description"
                            cols="30"
                            rows="5"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.description ? (
                            <span>{formik.errors.description}</span>
                        ) : null}
                        <label htmlFor="tags">Tags</label>
                        <Input
                            error={formik.errors.tags}
                            type="text"
                            name="tags"
                            id="tags"
                            value={formik.values.tags}
                            onChange={formik.handleChange}
                            placeholder="Separate tags with commas, example: javascript, web..."
                        />
                        {formik.errors.tags ? (
                            <span>{formik.errors.tags}</span>
                        ) : null}
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
