import { servicosData, Servico } from '../models/ServicosModel';
import { globalInfo } from '../models/GlobalInfoModel';

export class ServicosViewModel {
  sectionTitle = servicosData.sectionTitle;
  sectionSubtitle = servicosData.sectionSubtitle;
  buttonText = servicosData.buttonText;
  services: Servico[] = servicosData.services;
  whatsappLink = globalInfo.whatsappLink;

  getServices() {
    return this.services;
  }

  getWhatsappLink() {
    return this.whatsappLink;
  }
}