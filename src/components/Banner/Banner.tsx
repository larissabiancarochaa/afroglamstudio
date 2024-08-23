import React from 'react';
import { SectionBanner, ContainerBanner, ContainerConteudo, ContainerImg, Image } from './BannerStyles';
import { BannerViewModel } from '../../viewmodels/BannerViewModel';

const Banner: React.FC = () => {
  const { heading, subheading, description, buttonText, imageSrc, getWhatsappLink } = BannerViewModel();

  const handleButtonClick = () => {
    window.open(getWhatsappLink(), '_blank', 'noopener,noreferrer');
  };

  return (
    <SectionBanner id="inicio">
      <ContainerBanner className="container">
        <ContainerConteudo>
          <h1>{heading}</h1>
          <h2>{subheading}</h2>
          <p>{description}</p>
          <button onClick={handleButtonClick}>{buttonText}</button>
        </ContainerConteudo>
        <ContainerImg>
          <Image src={imageSrc} alt="Banner Image" />
        </ContainerImg>
      </ContainerBanner>
    </SectionBanner>
  );
};

export default Banner;