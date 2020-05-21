import React from 'react';

import { Container, SearchInput, SearchCheckbox } from './styles';

import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import { ReactComponent as PlusIcon } from '../../assets/icon-plus.svg';

export default function Actions() {
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
            <button type="submit">
                <PlusIcon />
                Add
            </button>
        </Container>
    );
}
