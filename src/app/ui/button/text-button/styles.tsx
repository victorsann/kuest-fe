import styled from "styled-components";
import { c_darkest_blue } from "../../../constants/colors";

export const TouchableArea = styled.button<{
    color?: string,
    fontSize?: string,
    isActive?: boolean
}>`
    font-size: 12px;
    border: none;
    padding: 0%;
    gap: 5px;
    background-color: transparent;
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    opacity: ${(props) => (props.isActive == true || props.isActive == null)
        ? '100%' : '60%'
    };
    &:active {
        box-shadow: 0 0 ${c_darkest_blue};
        transform: scale(0.95);
    }
`;