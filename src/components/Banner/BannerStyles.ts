import styled from 'styled-components';
import { fonts } from '../../fonts';

export const SectionBanner = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 90vh;
    overflow: hidden;
    width: 100%;

    @media(max-width: 768px){
        max-height: fit-content;
        padding: 70px 0 0 0;
    }
`;

export const ContainerBanner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 768px){
        flex-direction: column;
    }
`;

export const ContainerConteudo = styled.div`
    flex: 1;

    h1 {
        margin-bottom: 0;
        font-size: 1.2rem;
        color: ${props => props.theme.black}; // Adicionado

        @media(max-width: 1115px){
            font-size: 1rem;
        }

        @media(max-width: 768px){
            font-size: 0.8rem;
            margin-bottom: 10px;
        }
    }

    h2 {
        max-width: 600px;
        font-size: 2.5rem;
        color: ${props => props.theme.color1}; // Adicionado

        @media(max-width: 1115px){
            font-size: 2rem;
        }

        @media(max-width: 768px){
            max-width: 100%;
            font-size: 1.9rem;
            margin-bottom: 30px;
        }
    }

    p {
        max-width: 600px;
        font-size: 1.2rem;
        color: ${props => props.theme.black}; // Adicionado

        @media(max-width: 1115px){
            max-width: 500px;
            font-size: 1rem;
        }

        @media(max-width: 768px){
            margin-bottom: 30px;
        }
    }

    button {
        background-color: transparent;
        border: 2px solid ${props => props.theme.color1}; // Atualizado
        padding: 0.8em 4rem;
        font-family: ${fonts.fontFamily3};
        color: ${props => props.theme.color1}; // Atualizado
        cursor: pointer;
        font-weight: bold;
        font-size: 0.9rem;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background-color: ${props => props.theme.color1}; // Atualizado
            color: ${props => props.theme.white}; // Atualizado
        }
    }
`;

export const ContainerImg = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    position: relative;

    &::after {
        content: "";
        display : block;
        width: 30rem;
        height: 30rem;
        background-color: ${props => props.theme.color1}; // Atualizado
        border-radius: 100rem;
        position: absolute;
        bottom: -5rem;
        right: 0;

        @media(max-width: 999px){
            left: 0;
            right: auto;
        }

        @media(max-width: 768px){
            width: 25rem;
            height: 25rem;
            right: 0;
            left: auto;
        }
    }
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    position: relative;
    z-index: 1;
    max-width: 350px;
`;