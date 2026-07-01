import styled from "styled-components";
import { c_grey_two } from "../../constants/colors";

export const Container = styled.div<{ backgroundColor?: string }>`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-inline-end: 15%;
    padding-inline-start: 15%;
    background-color: ${(props) => props.backgroundColor};
    @media screen and (max-width: 800px) {
       padding-inline-end: 10%;
       padding-inline-start: 10%;
    }
`;

export const Section = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: row;
    @media screen and (max-width: 1080px) {
        flex-direction: column;
    }
`;

export const Col = styled.div`
    flex: 1;
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-direction: column;
`;

export const CheckBox = styled.input<{ color?: string, accentColor?: string, backgroundColor?: string }>`
   height: 18px;
   width: 18px;
   /* appearance: none; */
   outline: none;
   border: 1 solid ${c_grey_two};
   accent-color: ${(props) => props.accentColor};
   background-color: ${(props) => props.backgroundColor};
   &:hover {
     cursor: pointer;
   }
`;

export const Label = styled.text<{ color?: string }>`
    font-size: 12px;
    color: ${(props) => props.color};
`;
