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
            margin-bottom: 10px;
            font-weight: 600;
        }

        input,
        textarea {
            margin-bottom: 20px;
            background: #f5f4f6;
            border: 1px solid #ebeaed;
            box-shadow: none;
        }

        input:focus,
        textarea:focus {
            background: #ebeaed;
            border: 1px solid #dedce1;
        }

        button {
            margin-left: auto;
        }
    }
`;
