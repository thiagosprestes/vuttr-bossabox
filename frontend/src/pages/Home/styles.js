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

export const Message = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    h2 {
        font-size: 2rem;
        color: #848484;
    }
`;
