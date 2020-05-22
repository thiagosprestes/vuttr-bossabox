import React, { useState } from 'react';

import { Container, ToolHeader, ToolInfo, ToolTags } from './styles';

import { ReactComponent as CloseIcon } from '../../assets/icon-close.svg';

import Modal from '../RemoveModal';

export default function Tools() {
    // Define o estado inicial do modal como false
    const [modal, setModal] = useState(false);

    // Altera o estado do modal, caso true muda para false e vice-versa
    function toggleModal() {
        setModal(!modal);
    }

    return (
        <Container>
            <ToolHeader>
                <h3>Notion</h3>
                <button type="button" onClick={toggleModal}>
                    <CloseIcon />
                    remove
                </button>
            </ToolHeader>
            <ToolInfo>
                <span>Lorem ipsum indolor</span>
            </ToolInfo>
            <ToolTags>#organization</ToolTags>
            {modal && <Modal toggleModal={toggleModal} />}
        </Container>
    );
}
