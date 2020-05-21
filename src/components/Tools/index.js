import React from 'react';

import { Container, ToolHeader, ToolInfo, ToolTags } from './styles';

import { ReactComponent as CloseIcon } from '../../assets/icon-close.svg';

export default function Tools() {
    return (
        <Container>
            <ToolHeader>
                <h3>Notion</h3>
                <span>
                    <CloseIcon />
                    remove
                </span>
            </ToolHeader>
            <ToolInfo>
                <span>Lorem ipsum indolor</span>
            </ToolInfo>
            <ToolTags>#organization</ToolTags>
        </Container>
    );
}
