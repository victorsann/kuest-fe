import styled from "styled-components";

import { createGlobalStyle } from 'styled-components';

import { c_grey_one, c_grey_three } from "../../constants/colors";

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`;

export const Body = styled.div`
    flex: 1;
    background-color: ${c_grey_one};
`;

export const GlobalScrollbarStyle = createGlobalStyle`
  * {
     scrollbar-width: thin;
     scrollbar-color: ${c_grey_three} ${c_grey_one};
   }

  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: ${c_grey_one};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${c_grey_three};
    border-radius: 6px;
    border: 2px solid ${c_grey_one};
  }
  
  *::-webkit-scrollbar-thumb:hover {
    background-color: ${c_grey_three};
  }
`;