import { SobreData } from '../models/SobreModel';
import image from '../assets/images/Imagem-sobre.png';
import detalhe from '../assets/images/detalhe-1.png';
import { globalInfo } from '../models/GlobalInfoModel';

export const SobreViewModel = (): SobreData & { getWhatsappLink: () => string } => {
  const whatsappLink = globalInfo.whatsappLink;

  const getWhatsappLink = () => {
    return whatsappLink;
  };

  return {
    imageSrc: image,
    detalheSrc: detalhe,
    heading: 'Conheça o AfroGlam Studio',
    subheading: 'Sua Referência em Beleza e Cuidados com Cabelos Afro',
    description: 'No AfroGlam Studio, somos apaixonados por realçar a beleza natural dos cabelos afro e texturizados. Nossa equipe de profissionais experientes combina técnicas inovadoras com um profundo conhecimento das necessidades específicas dos cabelos afro. Oferecemos um ambiente acolhedor e personalizado para que cada cliente se sinta único e confiante. Descubra como podemos transformar seu visual e elevar sua autoestima!',
    buttonText: 'Saiba Mais Sobre Nós',
    getWhatsappLink,
  };
};
