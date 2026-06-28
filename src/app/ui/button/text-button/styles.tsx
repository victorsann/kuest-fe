import styled from "styled-components";
import { c_darkest_blue } from "../../../constants/colors";

export const TouchableArea = styled.button<{ color?: string, fontSize?: string }>`
    font-size: 12px;
    border: none;
    padding: 0%;
    gap: 5px;
    background-color: transparent;
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    &:active {
        box-shadow: 0 0 ${c_darkest_blue};
        transform: scale(0.95);
    }
`;