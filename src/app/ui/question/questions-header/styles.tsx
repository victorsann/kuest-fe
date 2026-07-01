import styled from "styled-components";
import { medium } from "../../../constants/font-weight";
import { c_grey_three, c_grey_two } from "../../../constants/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 800px) {
        flex-direction: column;
        background-color: pink;
    }
`;

export const IdContainer = styled.div`
    display: flex;
    height: 40px;
    width: 95px;
    align-items: center;
    justify-content: center;
    background-color: ${c_grey_three};
    @media screen and (max-width: 800px) {
       height: 25px;
       width: 100%;
    }
`;

export const MetaDataContainer = styled.div`
    display: flex;
    flex: 1;
    gap: 5px;
    height: 40px;
    padding-left: 15px;
    padding-right: 15px;
    align-items: center;
    background-color: ${c_grey_two};
    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: flex-start;
        padding-bottom: 10px;
        padding-top: 10px;
        gap: 5px
    }
`;

export const MetaDataTitle = styled.text<{ color?: string, fontSize?: string }>`
    font-weight: ${medium};
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
`;




