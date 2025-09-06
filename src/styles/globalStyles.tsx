import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
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
