import styled from 'styled-components';

export const ModalContainer = styled.div`
    header {
        svg path {
            stroke: #000;
            fill: #000;
            stroke-width: 70px;
        }

        button {
            margin-left: auto;
            background: none;
            border: 0;
            box-shadow: none;
            width: unset;

            svg path {
                stroke: #8f8a9b;
                fill: #8f8a9b;
                stroke-width: 12px;
            }
        }
    }

    form {
        display: flex;
        flex-direction: column;
        padding: 20px 20px 0;

        label {
            margin: 10px 0 10px;
            font-weight: 600;
        }

        span {
            color: #f95e5a;
            margin-left: auto;
        }

        button {
            margin-left: auto;
        }
    }
`;

export const Input = styled.input`
    margin-bottom: 5px;
    background: ${(props) => (props.error ? '#FEEFEE' : '#f5f4f6')};
    border: 1px solid #ebeaed;
    border-color: ${(props) => (props.error ? '#F95E5A' : '#ebeaed')};
    box-shadow: none;

    &:focus {
        background: #ebeaed;
        border: 1px solid #dedce1;
    }

    ::placeholder {
        color: ${(props) => (props.error ? '#f95e5a' : '')};
    }
`;
