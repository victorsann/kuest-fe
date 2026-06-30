import styled from "styled-components";
import { medium } from "../../constants/font-weight";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-inline-end: 15%;
    padding-inline-start: 15%;
`;

export const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    min-height: 50vh;
`;

export const Length = styled.div<{ color?: string }>`
    font-size: 15px;
    font-weight: ${medium};
    color: ${(props) => props.color}
`;

export const NoResultsFound = styled.text<{ color?: string }>`
    display: flex;
    justify-content: center;
    font-size: 15px;
    font-weight: ${medium};
    color: ${(props) => props.color}
`;
