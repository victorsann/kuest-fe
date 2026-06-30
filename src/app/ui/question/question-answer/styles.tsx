import styled from "styled-components";

export const Container = styled.div<{ backgroundColor?: string }>`
    display: grid;
    gap: 20px;
    padding-top: 3%;
    padding-bottom: 3%;
    padding-inline-end: 5%;
    padding-inline-start: 5%;
    background-color: ${(props) => props.backgroundColor};
`;

export const AnswerContainer = styled.div<{ backgroundColor?: string }>`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    border-radius: 5px;
    background-color: ${(props) => props.backgroundColor};
`;

export const AnswerKey = styled.text<{ color?: string }>`
    font-size: 14px;
    padding-left: 2px;
    font-weight: 600;
    color: ${(props) => props.color};
`;

export const Reason = styled.text<{ color?: string }>`
    font-size: 13px;
    padding: 2px;
    text-align: justify;
    color: ${(props) => props.color};
`;