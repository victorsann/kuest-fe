import styled from "styled-components";
import { c_grey_three, c_grey_two } from "../../../constants/colors";

export const Container = styled.div`
    display: grid;
    height: 40px;
    padding-right: 20px;
    border-top: 1px solid ${c_grey_three};
    border-bottom: 1px solid ${c_grey_three};
`;

export const FooterOptionLabel = styled.text<{ color?: string, fontSize?: string }>`
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
`;

export const FooterOption = styled.div<{ backgroundColor?: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: ${(props) => props.backgroundColor};
    &:hover {
      cursor: pointer;
      background-color: ${c_grey_two};
    }
    &:hover ${FooterOptionLabel} {
      cursor: pointer;
    }
`;
