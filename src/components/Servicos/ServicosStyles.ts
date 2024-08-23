import styled from "styled-components";
import { fonts } from "../../fonts";

export const ServicosContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7rem 0;
    background: ${props => props.theme.color4}; // Atualizado

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h2 {
            margin-bottom: 50px;
        }

        h1, h2 {
            text-align: center;

            @media (max-width: 800px) {
                br {
                    display: none;
                }
            }
        }

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
            margin-top: 50px;

            &:hover {
                border: 2px solid ${props => props.theme.color1}; // Atualizado
                background: transparent;
                color: ${props => props.theme.color1}; // Atualizado
                transition: background 0.3s ease;
            }

            @media (max-width: 800px) {
                padding: 0.7rem 1rem;
            }
        }
    }
`;

export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 30px 10px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 230px;
    min-width: 230px;

    img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        margin-bottom: 20px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }

    h3 {
        color:  ${props => props.theme.color1};
        font-family: ${fonts.fontFamily1};
    }
`;