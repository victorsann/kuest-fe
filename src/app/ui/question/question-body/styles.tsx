import styled from "styled-components";
import { medium } from "../../../constants/font-weight";

export const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    gap: 20px;
`;

export const Statement = styled.text<{ color?: string, fontSize?: string }>`
    font-weight: ${medium};
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
`;

export const Prompt = styled.text<{ color?: string, fontSize?: string }>`
    font-weight: ${medium};
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
`;

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const AnswerRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
`;

export const AnswerStatus = styled.text<{ color?: string }>`
    font-size: 12px;
    font-weight: ${medium};
    color: ${(props) => props.color};
`;
