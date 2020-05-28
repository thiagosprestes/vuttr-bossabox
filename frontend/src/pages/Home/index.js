import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Container, Message } from './styles';

import Tools from '../../components/Tools';

import Actions from '../../components/Actions';

import api from '../../services/api';

import * as ToolsActions from '../../store/modules/tools/actions';

export default function Home() {
    // Define o estado inicial do array de ferramentas
    const [tools, setTools] = useState([]);

    // Define o estado de carregamento
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    // Recebe as informações da store
    const updateTools = useSelector((state) => state.tools.update);
    const deleteTool = useSelector((state) => state.tools.id);
    const filteredData = useSelector((state) => state.filter.data);

    // Faz uma requisição ao backend para trazer todos os dados das ferramentas
    async function loadTools() {
        const response = await api.get('/tools');

        // Armazena as informações em um estado
        setTools(response.data);

        setLoading(false);
    }

    // Carrega as informações toda vez que o componente é renderizado
    useEffect(() => {
        loadTools();
    }, []);

    // Recarrega as informações e verifica se existem ferramentas registradas toda vez que houver uma alteração na store
    useEffect(() => {
        // Verifica tamanho do array de ferramentas e caso esteja vazio retorna id a ser apagado como nulo
        function verifyLength() {
            const toolsLength = (toolsData) => toolsData.length;

            if (toolsLength <= 0) {
                dispatch(ToolsActions.deleteToolFromList(null));
            }
        }

        verifyLength();
        loadTools();
    }, [updateTools, dispatch]);

    // Remove o item com id presente no store da lista de ferramentas sempre que houver alteração de id
    useEffect(() => {
        setTools((toolsData) =>
            toolsData.filter((tool) => tool.id !== deleteTool)
        );
    }, [deleteTool]);

    // Altera array de ferramentas com dados retornados da busca
    useEffect(() => {
        setTools(filteredData);
    }, [filteredData]);

    return (
        <Container>
            <h1>VUTTR</h1>
            <h2>Very Useful Tools to Remember</h2>
            <Actions />
            {loading ? (
                <Message>
                    <h2>Loading...</h2>
                </Message>
            ) : (
                <Tools tools={tools} />
            )}
        </Container>
    );
}
