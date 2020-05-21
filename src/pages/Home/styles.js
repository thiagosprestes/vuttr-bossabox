import styled from 'styled-components';

export const Container = styled.header`
    margin: 50px auto;
    max-width: 850px;

    h1 {
        font-weight: 400;
        font-size: 6em;
    }

    h2 {
        font-weight: 400;
        font-size: 3em;
    }
`;

export const Actions = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;

    button {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }

        svg path {
            stroke: #fff;
            fill: #fff;
            stroke-width: 20px;
        }
    }
`;

export const SearchInput = styled.div`
    display: flex;
    align-items: center;

    svg {
        position: absolute;
        width: 20px;
        height: 20px;
        padding: 10px;

        .a {
            stroke: #8f8a9b;
        }
    }

    input {
        padding-left: 40px;
    }
`;

export const SearchCheckbox = styled.label`
    display: flex;
    align-items: center;
    margin-right: auto;
    margin-left: 10px;
    font-weight: 600;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Estilização inicial do novo checkbox */
    span {
        height: 20px;
        width: 20px;
        background-color: #fff;
        border: 1px solid #dedce1;
        position: absolute;
        box-shadow: 0px 5px 7px #0000000d;
    }

    /* Adiciona um cor ao novo checkbox */
    input:checked ~ span {
        background-color: #365df0;
    }

    /* Criação do marcador do checkbox */
    span:after {
        content: '';
        position: absolute;
        display: none;
    }

    /* Estilização do indicador do novo checkbox */
    span:after {
        left: 6px;
        top: 2px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    /* Mostra o novo marcador quando o checkbox é marcado  */
    input:checked ~ span:after {
        display: block;
    }

    p {
        margin-left: 30px;
    }
`;
