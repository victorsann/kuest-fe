import styled from "styled-components";

export const HiperLink = styled.a<{ fontSize?: string, color?: string }>`
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.color};
    /* white-space: nowrap; */
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    &:hover {
        cursor: pointer;
    }
`;