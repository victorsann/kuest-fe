import styled from "styled-components";

const Column = styled.div<{ gap?: string, cursor?: any }>`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.gap};
    justify-content: space-between;
`;

export default Column;