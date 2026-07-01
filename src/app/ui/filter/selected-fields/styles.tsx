import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-top: 10px;
    flex-direction: column;
    gap: 20px;
`;

export const Title = styled.text<{ color?: string }>`
    font-size: 15px;
    font-weight: 500;
    color: ${(props) => props.color};
`;

export const Scope = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
`;

export const KeyContainer = styled.div<{ backgroundColor?: string }>`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    border-radius: 5px;
    padding: 5px 10px 5px 10px;
    background-color: ${(props) => props.backgroundColor}
`;

export const Remover = styled.div`
    display: flex;
    &:hover {
        cursor: pointer;
    }
`;

export const Key = styled.text<{ color?: string }>`
    font-size: 12px;
    color: ${(props) => props.color}
`;

export const ValueContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
`;

export const Value = styled.text<{ backgroundColor?: string }>`
    font-size: 12px;
    border-radius: 5px;
    padding: 5px 10px 5px 10px;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor}
`;
