import styled from "styled-components";

import { medium } from "../../constants/font-weight";

export const TouchableArea = styled.button <{ color: string, backgroundColor: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 90px;
    min-height: 30px;
    font-size: 18px;
    font-weight: ${medium};
    text-decoration: none;
    gap: 5px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    box-shadow: 0 0px 6px rgba(0, 0, 0, 0.15);
    &:active {
      transform: scale(0.95);
    }
`;