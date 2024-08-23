import { PortifolioData } from '../models/PortifolioModel';
import image1 from '../assets/images/img-1.png';
import image2 from '../assets/images/img-1.png';
import image3 from '../assets/images/img-1.png';
import image4 from '../assets/images/img-1.png';
import image5 from '../assets/images/img-1.png';
import { globalInfo } from '../models/GlobalInfoModel';

export const PortifolioViewModel = (): PortifolioData & { getWhatsappLink: () => string } =>  {
  const whatsappLink = globalInfo.whatsappLink;

  const getWhatsappLink = () => {
    return whatsappLink;
  };

  return {
    slides: [
      { src: image1 },
      { src: image2 },
      { src: image3 },
      { src: image4 },
      { src: image5 },
    ],
    heading: 'Explore Nosso Portfólio',
    subheading: 'Veja as Transformações e <br /> Estilos que Realizamos',
    buttonText: 'Descubra Nossos Serviços',
    getWhatsappLink,
  };
};