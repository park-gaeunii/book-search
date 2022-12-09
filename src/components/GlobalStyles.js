import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';
import nanumsquare from "../assets/NanumSquare.woff";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * { box-sizing: border-box; }

  html, body, #root { height: 100%; }
  
  button {
    background: none;
    border: 0;
    cursor: pointer;
    outline: none;
  }

  @font-face {
    font-family: nanumsquare;
    src: url(${nanumsquare}) format('woff');
  }

  input, button, select, textarea {
    font-family: inherit;
    background-color: transparent;
    border: none;
    outline: none;
  }

  a { text-decoration: none; }
`;

export default GlobalStyles;