import React from 'react';
import { useTheme } from 'styled-components';
import { Header, Nav, Logo, Ul, Li, ContainerButton, ToggleButton, ThemeButton, BotoesContainer } from './NavbarStyles';
import { FaWhatsapp, FaMoon, FaSun } from 'react-icons/fa'; 
import { MdMenu, MdClose } from 'react-icons/md'; 
import { useNavbarViewModel } from '../../viewmodels/NavbarViewModel';

const Navbar: React.FC = () => {
  const { toggleTheme, color1 } = useTheme() as any;
  const { menuOpen, scrolling, isMobile, toggleMenu, handleWhatsappClick } = useNavbarViewModel();

  return (
    <Header className={scrolling ? 'fixed' : ''}>
      <Nav>
        <Logo>
          <a href="#inicio">AfroGlam Studio</a>
        </Logo>
        <Ul id="listMenu" style={{ transform: isMobile ? (menuOpen ? 'translateX(0)' : 'translateX(-100%)') : 'none' }}>
          <Li><a href="#inicio">Início</a></Li>
          <Li><a href="#sobre">Sobre</a></Li>
          <Li><a href="#servico">Serviço</a></Li>
          <Li><a href="#portfolio">Portfólio</a></Li>
        </Ul>
        <BotoesContainer>
          <ContainerButton>
            <button onClick={handleWhatsappClick}><FaWhatsapp /> Comece agora</button> 
          </ContainerButton>
          
          <ToggleButton onClick={toggleMenu}>
            {menuOpen ? <MdClose /> : <MdMenu />} 
          </ToggleButton>
          <ThemeButton onClick={toggleTheme}>
            {color1 === '#973C00' ? <FaSun /> : <FaMoon />}
          </ThemeButton>
        </BotoesContainer>
      </Nav>
    </Header>
  );
};

export default Navbar;