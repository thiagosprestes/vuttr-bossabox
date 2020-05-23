import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Container } from './styles';

import Tools from '../../components/Tools';

import Actions from '../../components/Actions';

import api from '../../services/api';

export default function Home() {
    // Define o estado inicial do array de ferramentas
    const [tools, setTools] = useState([]);

    const dispatch = useDispatch();

    // Recebe as informações da store
    const updateTools = useSelector((state) => state.data);
    const deleteTool = useSelector((state) => state.id);

    // Faz uma requisição ao backend para trazer todos os dados das ferramentas
    async function loadTools() {
        const response = await api.get('/tools');

        // Armazena as informações em um estado
        setTools(response.data);
    }

    function verifyLength() {
        if (tools.length <= 0) {
            dispatch({ type: 'DELETE_TOOL', toolId: null });
        }
    }

    // Carrega as informações toda vez que o componente é renderizado
    useEffect(() => {
        loadTools();
    }, []);

    // Recarrega as informações e verifica se existem ferramentas registradas toda vez que houver uma alteração na store
    useEffect(() => {
        verifyLength();
        loadTools();
    }, [updateTools]);

    // Remove o item com id presente no store da lista de ferramentas sempre que houver alteração de id
    useEffect(() => {
        setTools(tools && tools.filter((tool) => tool.id !== deleteTool));
    }, [deleteTool]);

    return (
        <Container>
            <h1>VUTTR</h1>
            <h2>Very Useful Tools to Remember</h2>
            <Actions />
            <Tools tools={tools} />
        </Container>
    );
}
