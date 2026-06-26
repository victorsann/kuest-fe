import styled, { keyframes } from "styled-components";
import { c_grey_six } from "../../../constants/colors";
import { medium, regular } from "../../../constants/font-weight";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const OptionRemover = styled.text<{
    color?: string, backgroundColor?: string, opacity?: string
}>`
    opacity: ${(props) => props.opacity};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 23px;
    width: 23px;
    border-radius: 50px;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
`;

export const OptionRemoved = styled.text<{
    color?: string, backgroundColor?: string
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 23px;
    width: 23px;
    border-radius: 50px;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
`;

export const OptionRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    max-width: fit-content;
    &:hover ${OptionRemover} {
        animation: ${fadeIn} 0.5s ease-out forwards;
    }
`;

export const OptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    max-width: fit-content;
 `;

export const AnswerKey = styled.div<{
    color?: string, backgroundColor?: string
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 20px;
    font-size: 12px;
    border-radius: 10px;
    border: 1px solid ${c_grey_six};
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
`;

export const AnswerCheckBox = styled.div<{
    color?: string, backgroundColor?: string
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    border-radius: 50px;
    border: 1px solid ${c_grey_six};
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
`;

export const OptionStatement = styled.text<{
    color?: string, fontSize?: string, textDecoration?: string
}>`
    font-weight: ${medium};
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    text-decoration: ${(props) => props.textDecoration};
`;

export const RightAnswer = styled.text<{ color?: string }>`
    font-size: 12px;
    font-weight: ${regular};
    color: ${(props) => props.color};
`;

