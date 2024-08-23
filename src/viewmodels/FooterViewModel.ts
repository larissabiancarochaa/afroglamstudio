// src/viewmodels/FooterViewModel.ts
import { footerData, SocialLink } from '../models/FooterModel';

export class FooterViewModel {
    companyName = footerData.companyName;
    address = footerData.address;
    contact = footerData.contact;
    socialLinks: SocialLink[] = footerData.socialLinks;
    copyright = footerData.copyright;
    developerCredit = footerData.developerCredit;

    getSocialLinks() {
        return this.socialLinks;
    }
}