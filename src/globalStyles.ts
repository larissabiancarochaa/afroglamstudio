import { createGlobalStyle } from 'styled-components';
import { fonts } from './fonts';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fontFamily1};
    font-size: 16px;
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.black};
    line-height: 1.6;
    overflow-x: hidden;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }

  .container {
    width: 90%;
    max-width: 1440px;

    @media (max-width: 1199px) {
      width: 97%;
    }
    
    @media (max-width: 800px) {
      width: 90%;
    }
    
    @media (max-width: 480px) {
      width: 90%;
    }
  }

  main {
    width: 100%;
    overflow: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    font-weight: 600;
    line-height: 1.2;
  }

  h1 {
    font-size: 1rem;
    color: ${props => props.theme.black};
    font-family: ${fonts.fontFamily3};
    text-transform: uppercase;
  }

  h2 {
    font-size: 2rem;
    color: ${props => props.theme.color1};
    font-family: ${fonts.fontFamily4};

    @media (max-width: 800px) {
      font-size: 1.6rem;
    }
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-family: ${fonts.fontFamily10};

    @media (max-width: 800px) {
      font-size: 1rem;
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.color2};
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.theme.color3};
    }
  }
`;