// src/models/FooterModel.ts
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export interface SocialLink {
    platform: string;
    url: string;
    icon: JSX.Element;
}

export const footerData = {
    companyName: 'AfroGlam Studio',
    address: {
        street: 'Rua Exemplo, 123',
        neighborhood: 'Bairro, Cidade - Estado',
        postalCode: 'CEP 12345-678',
    },
    contact: {
        email: 'contato@afroglamstudio.com',
        phone: '(11) 1234-5678',
    },
    socialLinks: [
        {
            platform: 'Facebook',
            url: 'https://facebook.com',
            icon: <FaFacebookF />,
        },
        {
            platform: 'Twitter',
            url: 'https://twitter.com',
            icon: <FaTwitter />,
        },
        {
            platform: 'Instagram',
            url: 'https://instagram.com',
            icon: <FaInstagram />,
        },
    ],
    copyright: '2024 AfroGlam Studio. Todos os direitos reservados.',
    developerCredit: 'Site desenvolvido por Larissa Bianca.',
};