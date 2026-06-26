import styled from "styled-components";

import { medium } from "../../../constants/font-weight";
import { c_darkest_blue } from "../../../constants/colors";

export const TouchableArea = styled.button <{
  color: string,
  isActive?: boolean,
  borderColor?: string,
  backgroundColor: string
}>`
    display: flex;
    border: none;
    border-radius: 5px;
    min-width: 90px;
    min-height: 30px;
    align-items: center;
    justify-content: center;
    
    font-size: 12px;
    font-weight: ${medium};
    text-decoration: none;
        
    gap: 5px;
    padding-left: 10px;
    padding-right: 10px;
    
    color: ${(props) => props.color};
    border: 1px solid ${(props) => props.borderColor};
    background-color: ${(props) => props.backgroundColor};
    opacity: ${(props) => (props.isActive) ? '100%' : '60%'};

    &:active {
      box-shadow: 0 0 ${c_darkest_blue};
      transform: ${(props) => (props.isActive) ? 'scale(0.95)' : ''}; 
    }
`;