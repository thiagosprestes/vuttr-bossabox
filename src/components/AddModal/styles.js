import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 1;
    background-color: rgba(23, 12, 58, 0.9);
`;

export const Modal = styled.div`
    background-color: #fff;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    box-shadow: 0px 20px 25px #0000001a;
    border-radius: 5px;
    margin: 5% auto;

    header {
        display: flex;
        align-items: center;

        svg {
            width: 15px;
            height: 15px;
            margin-right: 10px;

            path {
                stroke: #000;
                fill: #000;
                stroke-width: 70px;
            }
        }

        h2 {
            font-size: 1.5em;
            font-weight: 600;
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
