import styled from "styled-components";

const Column = styled.div<{ gap?: string, cursor?: any }>`
    display: flex;
    gap: ${(props) => props.gap};
    flex-direction: column;
    justify-content: space-between;
`;

export default Column;