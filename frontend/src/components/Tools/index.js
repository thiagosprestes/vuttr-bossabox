import React, { useState } from 'react';

import { Container, ToolHeader, ToolInfo, ToolTags } from './styles';

import { ReactComponent as CloseIcon } from '../../assets/icon-close.svg';

import Modal from '../RemoveModal';

export default function Tools({ tools }) {
    // Define o estado inicial do modal como false
    const [modal, setModal] = useState(false);

    // Altera o estado do modal, caso true muda para false e vice-versa
    function toggleModal() {
        setModal(!modal);
    }

    return (
        <>
            {tools &&
                tools
                    .sort((a, b) => {
                        return b.id - a.id;
                    })
                    .map((tool) => (
                        <Container key={tool.id}>
                            <ToolHeader>
                                <h3>{tool.title}</h3>
                                <button type="button" onClick={toggleModal}>
                                    <CloseIcon />
                                    remove
                                </button>
                            </ToolHeader>
                            <ToolInfo>
                                <span>{tool.description}</span>
                            </ToolInfo>
                            <ToolTags>
                                {tool.tags &&
                                    tool.tags.map((tag) => (
                                        <span key={tag}>#{tag}</span>
                                    ))}
                            </ToolTags>
                            {modal && <Modal toggleModal={toggleModal} />}
                        </Container>
                    ))}
        </>
    );
}
