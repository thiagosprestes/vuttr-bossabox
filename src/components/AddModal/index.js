import React from 'react';

import { Modal } from './styles';

import { ReactComponent as PlusIcon } from '../../assets/icon-plus.svg';
import { ReactComponent as CloseIcon } from '../../assets/icon-close.svg';

import { Container } from '../Modal';

export default function AddModal({ toggleModal }) {
    return (
        <Container>
            <Modal>
                <header>
                    <PlusIcon />
                    <h2>Add new tool</h2>
                    <button type="button" onClick={toggleModal}>
                        <CloseIcon />
                    </button>
                </header>
                <form>
                    <label htmlFor="name">Tool Name</label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="link">Tool Link</label>
                    <input type="text" name="link" id="link" />
                    <label htmlFor="description">Tool description</label>
                    <textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="5"
                    />
                    <label htmlFor="tags">Tags</label>
                    <input type="text" name="tags" id="tags" />
                    <button type="button">Add tool</button>
                </form>
            </Modal>
        </Container>
    );
}
