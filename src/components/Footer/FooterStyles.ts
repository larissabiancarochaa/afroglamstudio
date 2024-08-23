import styled from "styled-components";
import { fonts } from "../../fonts";

export const FooterContainer = styled.footer`
    background-color: ${props => props.theme.color3};
    color:${props => props.theme.black};
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    p{
        margin: 0;
    }
`;

export const Logo = styled.h1`
    margin: 0;
    color: ${props => props.theme.color1};
    font-family: ${fonts.fontFamily4};
    font-size: 2rem;
    width: fit-content;
    text-transform: none;
    display: flex;
    justify-content: center;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 20px 0;
  flex-wrap: wrap;
  gap: 30px 10rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FooterInfo = styled.div`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 30px;
    }
`;

export const FooterColumn = styled.div`
  h2 {
    font-size: 1.3rem;
    font-family: ${fonts.fontFamily3};
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

export const Icon = styled.a`
  color:${props => props.theme.black};
  font-size: 24px;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color2};
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
`;