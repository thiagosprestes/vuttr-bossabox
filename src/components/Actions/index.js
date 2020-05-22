import React, { useState } from 'react';

import { Container, SearchInput, SearchCheckbox } from './styles';

import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import { ReactComponent as PlusIcon } from '../../assets/icon-plus.svg';

import Modal from '../AddModal';

export default function Actions() {
    // Define o estado inicial do modal como false
    const [modal, setModal] = useState(false);

    // Altera o estado do modal, caso true muda para false e vice-versa
    function toggleModal() {
        setModal(!modal);
    }

    return (
        <Container>
            <SearchInput>
                <SearchIcon />
                <input type="text" placeholder="Search" />
            </SearchInput>
            <SearchCheckbox>
                <input id="search-by-tag" type="checkbox" />
                <span />
                <p>search in tags only</p>
            </SearchCheckbox>
            <button type="submit" onClick={toggleModal}>
                <PlusIcon />
                Add
            </button>
            {modal && <Modal toggleModal={toggleModal} />}
        </Container>
    );
}
