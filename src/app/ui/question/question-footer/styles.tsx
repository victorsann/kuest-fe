import styled from "styled-components";
import { c_grey_three } from "../../../constants/colors";

export const Container = styled.div`
    display: grid;
    height: 40px;
    padding-left: 20px;
    padding-right: 20px;
    border-top: 1px solid ${c_grey_three};
    border-bottom: 1px solid ${c_grey_three};
`;