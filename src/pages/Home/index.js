import React from 'react';

import { Container, Actions, SearchInput, SearchCheckbox } from './styles';

import { ReactComponent as SearchIcon } from '../../assets/icon-search.svg';
import { ReactComponent as PlusIcon } from '../../assets/icon-plus.svg';

export default function Home() {
    return (
        <Container>
            <h1>VUTTR</h1>
            <h2>Very Useful Tools to Remember</h2>
            <Actions>
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
            </Actions>
        </Container>
    );
}
