import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./utils/colors";
import { device, size } from "./utils/mixins";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   font-family: 'Montserrat', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  body {
    background-color: ${colors.white};
    color: ${colors.black};
  }

  input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
   border: 2px solid ${colors.white};
  /* ${device.tablet}{
    border: 2px solid ${colors.grayBg};
  } */
  /* border: none; */
  -webkit-text-fill-color: #52555f;
  /* -webkit-box-shadow: 0 0 0 1000px #f6f7fb inset; */
  transition: background-color 5000s ease-in-out 0s;
}
`;

export default GlobalStyle;
