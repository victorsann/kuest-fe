import styled from "styled-components";

const Row = styled.div<{ gap?: string, cursor?: any }>`
    display: flex;
    gap: ${(props) => props.gap};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    :hover {
        cursor: ${(props) => props.cursor ? 'pointer' : 'auto'};
    }
`;

export default Row;