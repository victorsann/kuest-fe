import styled from "styled-components";

import { NavLink } from "react-router-dom";

import { medium } from "../../constants/font-weight";
import { c_white, c_black, c_dark_blue } from "../../constants/colors";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    gap: 50px;
    z-index: 1;
    background-color: ${c_white};
    box-shadow: 0px 6px 12px -9px rgba(0,0,0,0.2);
`;

export const NavItem = styled(NavLink) <{ isActive: boolean }>`
  display: flex;
  gap: 10px;
  flex-direction: row;
  text-decoration: none;
  font-size: 15px;
  font-weight: ${medium};
  color: ${(props) => props.isActive ? c_dark_blue : c_black};
`;