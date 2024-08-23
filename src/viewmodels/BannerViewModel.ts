import { BannerData } from '../models/BannerModel';
import image from '../assets/images/jovem-de-tranca-nago-banner-landing-page.png';
import { globalInfo } from '../models/GlobalInfoModel';

export const BannerViewModel = (): BannerData & { getWhatsappLink: () => string } => {
  const whatsappLink = globalInfo.whatsappLink;

  const getWhatsappLink = () => {
    return whatsappLink;
  };

  return {
    heading: 'Transforme Seu Estilo com AfroGlam Studio',
    subheading: 'Especialistas em Beleza Afro e Cabelos Texturizados',
    description: 'No AfroGlam Studio, oferecemos cortes, tratamentos e penteados personalizados para cabelos afro e texturizados. Experimente um serviço profissional que celebra a beleza única do seu cabelo. Agende sua transformação hoje mesmo!',
    buttonText: 'Agende Agora',
    imageSrc: image,
    getWhatsappLink,
  };
};