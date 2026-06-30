import styled from "styled-components";
import { medium } from "../../constants/font-weight";

export const Title = styled.text<{ color: string }>`
    font-size: 20px;
    font-weight: ${medium};
    color: ${(props) => props.color}
`;

export const Subtitle = styled.div<{ color: string }>`
    display: flex;
    flex-direction: row;
    gap: 5px;
    font-size: 15px;
    font-weight: ${medium};
    color: ${(props) => props.color}
`;


