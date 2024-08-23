import styled from "styled-components";
import { fonts } from "../../fonts";

export const PortifolioSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 7rem 0;
    background: ${props => props.theme.white};

    .mySwiper {
        width: 100%;
        padding-top: 2rem;
        padding-bottom: 2rem;

        .swiper-pagination-bullet {
            background: ${props => props.theme.color5}; 
        }

        .swiper-pagination-bullet-active {
            background: ${props => props.theme.color1}; 
        }

        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 300px;
            height: 300px;

            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .swiper-slide-active {
            transform: scale(1.1);
            z-index: 1;
        }
    }

    @media (max-width: 768px) {
        .mySwiper {
            .swiper-slide {
                width: 350px;
                height: 350px;
            }
        }
    }

    @media (max-width: 480px) {
        .mySwiper {
            .swiper-slide {
                width: 300px;
                height: 300px;
            }
        }
    }

    h2 {
        margin-bottom: 20px;

        @media (max-width: 800px) {
            br {
                display: none;
            }
        }
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        button {
            cursor: pointer;
            border: 2px solid ${props => props.theme.color1};
            padding: 0.7rem 4rem;
            background: ${props => props.theme.color1};
            color: ${props => props.theme.white};
            font-family: ${fonts.fontFamily4};
            font-size: .9rem;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: background 0.3s ease;
            margin-top: 30px;
    
            &:hover {
                border: 2px solid ${props => props.theme.color1};
                background: transparent;
                color: ${props => props.theme.color1};
                transition: background 0.3s ease;
            }
    
            @media (max-width: 800px) {
                padding: 0.7rem 1rem;
            }
        }
    }
`;

export const ContainerSwiper = styled.div`
    width: 100%;
    overflow: hidden;
`;