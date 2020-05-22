import React from 'react';

import { Modal } from './styles';

import { ReactComponent as CloseIcon } from '../../assets/icon-close.svg';

import { Container } from '../Modal';

export default function RemoveModal({ toggleModal }) {
    return (
        <Container>
            <Modal>
                <header>
                    <CloseIcon />
                    <h2>Remove tool</h2>
                </header>
                <p>Are you sure you want to remove Notion?</p>
                <div>
                    <button
                        type="button"
                        className="cancel"
                        onClick={toggleModal}
                    >
                        Cancel
                    </button>
                    <button type="button" className="confirm">
                        Yes, remove
                    </button>
                </div>
            </Modal>
        </Container>
    );
}
