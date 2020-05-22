import styled from 'styled-components';

export const Modal = styled.div`
    background-color: #fff;
    padding: 20px;
    border: 1px solid #888;
    width: 30%;
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
                stroke: #f95e5a;
                fill: #f95e5a;
                stroke-width: 12px;
            }
        }

        h2 {
            font-size: 1.5em;
            font-weight: 600;
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
