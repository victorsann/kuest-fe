import styled from "styled-components";

export const Container = styled.div<{ backgroundColor?: string }>`
    display: grid;
    gap: 20px;
    border-radius: 5px;
    background-color: ${(props) => props.backgroundColor};
`;

