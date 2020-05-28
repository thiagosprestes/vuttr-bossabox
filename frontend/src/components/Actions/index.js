import React, { useState } from 'react';

import { debounce } from 'lodash';

import { useDispatch } from 'react-redux';

import { Container, SearchInput, SearchCheckbox } from './styles';

import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import { ReactComponent as PlusIcon } from '../../assets/icon-plus.svg';

import Modal from '../AddModal';

import api from '../../services/api';

import * as FilterActions from '../../store/modules/filter/actions';

export default function Actions() {
    const dispatch = useDispatch();

    // Define o estado inicial do modal como false
    const [modal, setModal] = useState(false);

    // Define o estado inicial do checkbox
    const [checked, setChecked] = useState(false);

    // Altera o estado do modal, caso true muda para false e vice-versa
    function toggleModal() {
        setModal(!modal);
    }

    // Realiza a busca na api com o valor definido na busca
    async function filterToolName(searchTerm) {
        if (!checked) {
            const response = await api.get(`/tools?q=${searchTerm}`);
            dispatch(FilterActions.filterByName(response.data));
        } else {
            const response = await api.get(`/tools?tags_like=${searchTerm}`);
            dispatch(FilterActions.filterByName(response.data));
        }
    }

    // Define um tempo de atraso pra alteração do valor de busca
    const delayedRequest = debounce((value) => {
        filterToolName(value);
    }, 1000);

    // Altera o estado do checkbox
    function handleCheck() {
        setChecked(!checked);
    }

    return (
        <Container>
            <SearchInput>
                <SearchIcon />
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => delayedRequest(e.target.value)}
                />
            </SearchInput>
            <SearchCheckbox>
                <input
                    id="search-by-tag"
                    type="checkbox"
                    onChange={handleCheck}
                />
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
