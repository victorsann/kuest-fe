import styled from "styled-components";
import { medium } from "../../constants/font-weight";

export const Title = styled.text<{ color: string }>`
    font-size: 20px;
    font-weight: ${medium};
    color: ${(props) => props.color}
`;

export const Subtitle = styled.text<{ color: string }>`
    font-size: 15px;
    font-weight: ${medium};
    color: ${(props) => props.color}
`;
