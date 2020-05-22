import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        background: #F5F4F6;
        height: 100%;
    }

    body, input, button, textarea {
        font: 400 14px Source Sans Pro, sans-serif;
    }

    button {
        cursor: pointer;
        border-radius: 5px;
        border: 0;
        padding: 10px;
        background: #365DF0;
        color: #FFF;
        border: 1px solid #EBEAED;
        font-weight: 600;
        box-shadow: 0px 5px 7px #0000000D;
        width: 100px;
    }

    button:hover {
        background: #2F55CC;
    }

    button:active {
        background: #244AA8;
    }

    input, textarea {
        background: #FFF;
        border: 1px solid #EBEAED;
        border-radius: 5px;
        opacity: 1;
        color: #170C3A;
        padding: 10px;
        box-shadow: 0px 5px 7px #0000000D;
    }

    input:focus {
        border-color: #DEDCE1;
    }

    input:focus::placeholder {
        color: #8F8A9B;
    }

    input::placeholder {
        color: #B1ADB9;
    }
`;
