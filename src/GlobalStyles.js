import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  a,
  a:visited {
    text-decoration: none;
    font-family: "StratosSkyeng", sans-serif;
    cursor: pointer;
  }
  
  button,
  ._btn {
    cursor: pointer;
    
  }
  
  ul li {
    list-style: none;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", sans-serif;
    color: #000000;
    background-color: #f1f1f1;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 1px; 
    }

    &::-webkit-scrollbar-track {
      background-color: transparent; 
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent; 
    }
  }
  
  div,
  button,
  a {
    font-family: "Roboto", sans-serif;
  }
`;
