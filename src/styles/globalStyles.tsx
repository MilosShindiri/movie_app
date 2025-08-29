import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 300;
  }

  body {
    font-family: 'Nunito_Sans', NunitoSans, sans-serif;
    background-color: #120c28;
    color: white;
  }
`;
