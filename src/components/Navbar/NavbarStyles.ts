import styled, { keyframes } from 'styled-components';
import { fonts } from '../../fonts';    

const addFixed = keyframes`
  0% {
    top: -12vh;
  }
  100% {
    top: 0;
  }
`;

export const Header = styled.header`
  background: ${props => props.theme.white};
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  height: 12vh;
  position: relative;
  z-index: 1000;
  max-height: 100px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);

  &.fixed {
    position: fixed;
    animation: ${addFixed} 1s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    height: 10vh;
  }
`;

export const Nav = styled.nav`
  width: 90%;

  @media (max-width: 1199px) {
    width: 97%;
  }

  @media (max-width: 800px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;

  a {
    color: ${props => props.theme.color1};
    font-family: ${fonts.fontFamily4};
    font-size: calc(1rem + 1vw);
    width: fit-content;
  }
`;

export const Logo = styled.div`
  flex: 1;
`;

export const Ul = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    padding: calc(12vh + 50px) 0 100px 0;
    width: 100%;
    background: ${props => props.theme.white};
    transform: translateX(-100%);
    transition: 1s all;
    z-index: -1;
  }
`;

export const Li = styled.li`
  font-size: 14px;

  &.active {
    a {
      color: ${props => props.theme.black} !important;
    }
  }

  a {
    color: ${props => props.theme.color1};
    font-family: ${fonts.fontFamily3};
    font-size: 16px;

    &:hover{
      color: ${props => props.theme.black};
    }
  }

  button {
    background: linear-gradient(90deg, ${props => props.theme.color2}, ${props => props.theme.color3});
    outline: none;
    border: none;
    padding: 10px 30px;
    border-radius: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${props => props.theme.color1};
    font-family: ${fonts.fontFamily3};
    transition: background 1s ease, 1s all;

    &:hover {
      background: linear-gradient(90deg, ${props => props.theme.white}, ${props => props.theme.color2});
      color: ${props => props.theme.black};
    }
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }

  button {
    cursor: pointer;
    background-color: ${props => props.theme.color1};
    color: ${props => props.theme.white};
    border: none;
    padding: 0.8rem 3rem;
    border-radius: 10rem;
    font-size: 0.9rem;
    transition: background-color 0.3s ease;
    font-family: ${fonts.fontFamily1};
    text-transform: uppercase;

    &:hover {
      background-color: ${props => props.theme.color2};
    }

    &:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  }
`;

export const ToggleButton = styled.button`
  display: none;
  color: ${props => props.theme.color1};
  font-size: calc(.8rem + .8rem);
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.color1};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.color2};
  }
`;

export const BotoesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  flex: 1;
`;