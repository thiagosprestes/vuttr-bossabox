import React, { useState, useEffect, useRef } from 'react';

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
    // Define o estado inicial do input de busca
    const [search, setSearch] = useState('');

    // Define o estado inicial do modal como false
    const [modal, setModal] = useState(false);

    // Define um tempo de atraso pra alteração do valor de busca
    const delayedRequest = useRef(
        debounce((value) => {
            setSearch(value);
        }, 1000)
    ).current;

    // Altera o estado do modal, caso true muda para false e vice-versa
    function toggleModal() {
        setModal(!modal);
    }

    // Chama a função que realiza a busca na api toda vez que o valor da busca é alterado
    useEffect(() => {
        // Realiza a busca na api com o valor definido na busca
        async function filterToolName() {
            const response = await api.get(`/tools?q=${search}`);
            dispatch(FilterActions.filterByName(response.data));
        }

        filterToolName();
    }, [search, dispatch]);

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
