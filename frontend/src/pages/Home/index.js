import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import Tools from '../../components/Tools';

import Actions from '../../components/Actions';

import api from '../../services/api';

export default function Home() {
    const [tools, setTools] = useState();

    async function loadTools() {
        const response = await api.get('/tools');

        setTools(response.data);
    }

    useEffect(() => {
        loadTools();
    }, []);

    return (
        <Container>
            <h1>VUTTR</h1>
            <h2>Very Useful Tools to Remember</h2>
            <Actions />
            <Tools tools={tools} />
        </Container>
    );
}
