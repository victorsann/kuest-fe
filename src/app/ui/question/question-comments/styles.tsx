import styled from "styled-components";

export const Container = styled.div<{ backgroundColor?: string }>`
    display: grid;
    gap: 20px;
    padding-top: 3%;
    padding-bottom: 3%;
    padding-inline-end: 5%;
    padding-inline-start: 5%;
    background-color: ${(props) => props.backgroundColor};
`;

