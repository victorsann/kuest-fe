import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { medium } from "../../../constants/font-weight";
import { c_grey_six, c_dark_blue } from "../../../constants/colors";

export const TouchableArea = styled(NavLink) <{ isActive?: boolean }>`
    text-decoration: none;
    font-size: 15px;
    font-weight: ${medium};
    color: ${(props) => props.isActive ? c_dark_blue : c_grey_six};
`;