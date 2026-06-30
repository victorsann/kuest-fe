import styled from "styled-components";

export const Input = styled.textarea<{ color?: string }>`
    border: none;
    font-size: 13px;
    font-family: 'Roboto', sans-serif;
    resize: none; 
    overflow-y: auto;
    text-align: justify;
    field-sizing: content; 
    min-height: calc(1lh + 1px); /* Starts at 1 line high */
    max-height: calc(500lh + 16px); /* Stops growing and scrolls after 5 lines */
    color: ${(props) => props.color};
    &:focus {
      outline: none; 
    };
`;