import styled from "styled-components";

const Row = styled.div<{ gap?: string, cursor?: any, justifyContent?: string }>`
    display: flex;
    gap: ${(props) => props.gap};
    flex-direction: row;
    align-items: center;
    justify-content: ${(props) => props.justifyContent ?? 'space-between'};
    :hover {
        cursor: ${(props) => props.cursor ? 'pointer' : 'auto'};
    }
`;

export default Row;