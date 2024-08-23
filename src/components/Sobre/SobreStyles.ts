import styled, { keyframes } from "styled-components";
import { fonts } from "../../fonts";

const detalheEffect = keyframes`
  0% {
    bottom: 0rem;
  }
  50% {
    bottom: -4rem;
  }
  100% {
    bottom: 0rem;
  }
`;

const mulherEffect = keyframes`
  0% {
    top: -3rem;
  }
  50% {
    top: -4rem;
  }
  100% {
    top: -3rem;
  }
`;

export const SobreContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.color3}; // Atualizado
    padding: 7rem 0;

    .container {
        display: flex;

        @media (max-width: 800px) {
            flex-direction: column-reverse;
            gap: 7rem;
        }
    }
`;

export const ContainerImagem = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    &::after {
        content: "";
        display: block;
        width: 15rem;
        height: 15rem;
        background: ${props => props.theme.color2}; // Atualizado
        position: absolute;
        left: 0;
        top: -3rem;
        animation: ${mulherEffect} 5s infinite;
    }
`;

export const Mulher = styled.img`
    position: relative;
    z-index: 1;
    max-width: 100%;
`;

export const Detalhe = styled.img`
    position: absolute; 
    right: 2rem;
    bottom: -3rem;
    z-index: 2;
    animation: ${detalheEffect} 10s infinite;

    @media (max-width: 800px) {
        right: -2rem;
    }
`;

export const ContainerConteudo = styled.div`
    flex: 1;

    button {
        cursor: pointer;
        border: 2px solid ${props => props.theme.color1}; // Atualizado
        padding: 0.7rem 4rem;
        background: ${props => props.theme.color1}; // Atualizado
        color: ${props => props.theme.white}; // Atualizado
        font-family: ${fonts.fontFamily4};
        font-size: .9rem;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        transition: background 0.3s ease;

        &:hover {
            border: 2px solid ${props => props.theme.color1}; // Atualizado
            background: transparent;
            color: ${props => props.theme.color1}; // Atualizado
            transition: background 0.3s ease;
        }

        @media (max-width: 800px) {
            padding: 0.7rem 2rem;
        }
    }
`;