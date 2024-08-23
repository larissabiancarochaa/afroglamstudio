import React from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import { SobreViewModel } from '../../viewmodels/SobreViewModel';
import { SobreContainer, ContainerImagem, Mulher, Detalhe, ContainerConteudo } from './SobreStyles';

const Sobre: React.FC = () => {
  const { imageSrc, detalheSrc, heading, subheading, description, buttonText, getWhatsappLink } = SobreViewModel();

  const handleButtonClick = () => {
    window.open(getWhatsappLink(), '_blank', 'noopener,noreferrer');
  };

  return (
    <SobreContainer id="sobre">
      <div className="container">
        <ContainerImagem>
          <Mulher src={imageSrc} alt="Mulher com cabelo afro" />
          <Detalhe src={detalheSrc} alt="Detalhe decorativo" />
        </ContainerImagem>
        <ContainerConteudo>
          <h1>{heading}</h1>
          <h2>{subheading}</h2>
          <p>{description}</p>
          <button onClick={handleButtonClick}><FaPlusSquare /> {buttonText}</button>
        </ContainerConteudo>
      </div>
    </SobreContainer>
  );
};

export default Sobre;