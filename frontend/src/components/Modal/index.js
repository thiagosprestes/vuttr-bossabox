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
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Modal = styled.div`
    background-color: #fff;
    padding: 20px;
    border: 1px solid #888;
    width: ${(props) => `${props.modalWidth}%`};
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
        }

        h2 {
            font-size: 1.5em;
            font-weight: 600;
        }
    }
`;
