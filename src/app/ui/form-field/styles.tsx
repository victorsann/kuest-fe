import { c_white } from "../../constants/colors";
import { medium } from "../../constants/font-weight";

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
    flex-direction: column;
`;

export const Label = styled.text<{ fontSize?: string, color?: string }>`
    font-size: 14px;
    margin-left: 15px;
    font-weight: ${medium};
    color: ${(props) => props.color}
`;

export const FormContainer = styled.div<{ height?: string, backgroundColor?: string }>`
    display: flex;
    height: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 5px;
    align-items: center;
    background-color: ${(props) => (props.backgroundColor)
        ? props.backgroundColor : c_white
    };
`;