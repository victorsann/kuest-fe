import styled from "styled-components";

import { c_white } from "../../constants/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-inline-start: 15%;
    padding-inline-end: 15%;
    height: 60px;
    background-color: ${c_white};
    border-bottom: 1px solid #F3F3F3;
    @media screen and (max-width: 800px) {
       padding-inline-end: 10%;
       padding-inline-start: 10%;
    }
`;


