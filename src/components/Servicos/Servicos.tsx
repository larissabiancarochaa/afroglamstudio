import React from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import { ServicosContainer, Cards, Card } from './ServicosStyles';
import { ServicosViewModel } from '../../viewmodels/ServicosViewModel';

const Servicos: React.FC = () => {
  const viewModel = new ServicosViewModel();

  const handleButtonClick = () => {
    window.open(viewModel.getWhatsappLink(), '_blank', 'noopener,noreferrer');
  };

  return (
    <ServicosContainer id="servico">
      <div className="container">
        <h1>{viewModel.sectionTitle}</h1>
        <h2 dangerouslySetInnerHTML={{ __html: viewModel.sectionSubtitle }}></h2>
        <Cards>
          {viewModel.getServices().map((servico, index) => (
            <Card key={index}>
              <img src={servico.imageUrl} alt={servico.altText} />
              <h3>{servico.title}</h3>
              <p>{servico.description}</p>
            </Card>
          ))}
        </Cards>
        <button onClick={handleButtonClick}><FaPlusSquare /> {viewModel.buttonText}</button>
      </div>
    </ServicosContainer>
  );
};

export default Servicos;