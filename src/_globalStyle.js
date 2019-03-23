import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F5F5F5;
    font-family: 'Open Sans', sans-serif;
  }
  a {
    text-decoration: none;
  }
  * {
    outline: none;
  }
  .page-title {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 20px;
  }
  .underline {
    text-decoration: underline;
  }
`;

export default GlobalStyle;
