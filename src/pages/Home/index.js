import React from 'react';

import { Container } from './styles';

import Tools from '../../components/Tools';

import Actions from '../../components/Actions';

export default function Home() {
    return (
        <Container>
            <h1>VUTTR</h1>
            <h2>Very Useful Tools to Remember</h2>
            <Actions />
            <Tools />
        </Container>
    );
}
