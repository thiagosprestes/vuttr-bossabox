import styled from 'styled-components';

export const ModalContainer = styled.div`
    header {
        svg path {
            stroke: #f95e5a;
            fill: #f95e5a;
            stroke-width: 12px;
        }

        h2 {
            color: #f95e5a;
        }
    }

    p {
        margin: 20px 0;
    }

    div {
        display: flex;
        justify-content: flex-end;

        button {
            transition: filter 0.2s;
        }

        button + button {
            margin-left: 20px;
        }

        button:hover {
            filter: brightness(90%);
        }

        .cancel {
            background: #e1e7fd;
            color: #365df0;
        }

        .confirm {
            background: #f95e5a;
        }
    }
`;
