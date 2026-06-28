import styled from "styled-components";

export const Container = styled.div<{ backgroundColor?: string }>`
    display: grid;
    height: 40px;
    padding-right: 20px;
    background-color: ${(props) => props.backgroundColor};
`;