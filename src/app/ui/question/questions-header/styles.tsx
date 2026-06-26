import styled from "styled-components";
import { c_grey_three, c_grey_two } from "../../../constants/colors";
import { medium } from "../../../constants/font-weight";

export const IdContainer = styled.div`
    display: flex;
    height: 40px;
    width: 95px;
    align-items: center;
    justify-content: center;
    background-color: ${c_grey_three};
`;

export const MetaDataContainer = styled.div`
    display: flex;
    flex: 1;
    gap: 10px;
    height: 40px;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    background-color: ${c_grey_two};
`;

export const MetaDataTitle = styled.text<{ color?: string, fontSize?: string }>`
    font-weight: ${medium};
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
`;




