import React, { useState } from 'react';

import { Container, ToolHeader, ToolInfo, ToolTags } from './styles';

import { ReactComponent as CloseIcon } from '../../assets/icon-close.svg';

import Modal from '../RemoveModal';

export default function Tools() {
    const [modal, setModal] = useState(false);

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
