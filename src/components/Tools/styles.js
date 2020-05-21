import styled from 'styled-components';

export const Container = styled.section`
    background-color: #fff;
    box-shadow: 0px 5px 7px #0000000d;
    border: 1px solid #ebeaed;
    border-radius: 5px;
    padding: 20px;
`;

export const ToolHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    h3 {
        text-decoration: underline;
        font-size: 20px;
    }

    span {
        display: flex;
        align-items: center;
        font-weight: 600;
        color: #f95e5a;

        svg {
            width: 15px;
            height: 15px;
            margin-right: 5px;

            .a {
                stroke-width: 12px;
                stroke: #f95e5a;
            }
        }
    }
`;

export const ToolInfo = styled.div`
    margin-bottom: 20px;
`;

export const ToolTags = styled.div`
    font-weight: 600;
`;
