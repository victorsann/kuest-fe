import styled from "styled-components";
import { c_dark_blue, c_grey_two } from "../../constants/colors";

export const Container = styled.div`
    flex: 1;
    position: relative;
`;

export const Control = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover {
      cursor: pointer;
    }
`;

export const Placeholder = styled.text<{ color?: string }>`
   font-size: 12px;
   color: ${(props) => props.color};
`;

export const List = styled.ul<{ backgroundColor?: string }>`
    display: flex;
    flex-direction: column;
    top: calc(100%);
    position: absolute;
    padding: 0px;
    max-height: 200px;
    width: 100%;
    overflow-y: auto;
    z-index: 1000;
    border-radius: 6px;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.2);
    background-color: ${(props) => props.backgroundColor};
`;

export const SeachBar = styled.div<{ backgroundColor?: string }>`
    display: flex;
    align-items: center;
    padding: 8px;
    gap: 5px;
    border-bottom: 1px solid #ccc;
    background-color: ${(props) => props.backgroundColor};
`;

export const Option = styled.div<{ backgroundColor?: string }>`
    display: flex;
    align-items: center;
    padding: 8px;
    gap: 5px;
    list-style-type: none;
    background-color: ${(props) => props.backgroundColor};
    &:hover {
      cursor: pointer;
      background-color: ${c_grey_two};
    }
`;

export const CheckBox = styled.input<{ color?: string }>`
   height: 15px;
   width: 15px;
   border: none;
   accent-color: ${c_dark_blue}
`;

export const Label = styled.text<{ color?: string }>`
      font-size: 12px;
      color: ${(props) => props.color};
       &:hover {
         cursor: pointer;
       }
`;

export const EmptyList = styled.text<{ color?: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    font-size: 12px;
    color: ${(props) => props.color};
`;
