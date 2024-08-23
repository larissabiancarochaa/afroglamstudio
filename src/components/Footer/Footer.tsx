import React from 'react';
import { FooterBottom, FooterColumn, FooterContainer, FooterContent, FooterInfo, Icon, Logo, SocialIcons } from './FooterStyles';
import { FooterViewModel } from '../../viewmodels/FooterViewModel';

const Footer: React.FC = () => {
  const viewModel = new FooterViewModel();

  return (
    <FooterContainer>
      <FooterContent>
        <Logo>{viewModel.companyName}</Logo>
        <FooterInfo>
          <FooterColumn>
            <h2>Endereço</h2>
            <p>{viewModel.address.street}</p>
            <p>{viewModel.address.neighborhood}</p>
            <p>{viewModel.address.postalCode}</p>
          </FooterColumn>
          <FooterColumn>
            <h2>Contato</h2>
            <p>Email: {viewModel.contact.email}</p>
            <p>Telefone: {viewModel.contact.phone}</p>
          </FooterColumn>
          <FooterColumn>
            <h2>Redes Sociais</h2>
            <SocialIcons>
              {viewModel.getSocialLinks().map((link) => (
                <Icon key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </Icon>
              ))}
            </SocialIcons>
          </FooterColumn>
        </FooterInfo>
      </FooterContent>
      <FooterBottom>
        <p>&copy; {viewModel.copyright}</p>
        <p>{viewModel.developerCredit}</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;