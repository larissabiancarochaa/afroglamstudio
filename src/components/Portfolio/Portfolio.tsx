import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; 
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { PortifolioSection, ContainerSwiper } from './PortfolioStyles';
import { FaPlusSquare } from 'react-icons/fa';
import { PortifolioViewModel } from '../../viewmodels/PortifolioViewModel';

const Portifolio: React.FC = () => {
  const { slides, heading, subheading, buttonText, getWhatsappLink } = PortifolioViewModel();

  
  const handleButtonClick = () => {
    window.open(getWhatsappLink(), '_blank', 'noopener,noreferrer');
  };

  return (
    <PortifolioSection id="portfolio">
      <div className="container">
        <h1>{heading}</h1>
        <h2 dangerouslySetInnerHTML={{ __html: subheading }} />
        <ContainerSwiper>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            autoplay={{ 
              delay: 3000, 
              disableOnInteraction: false, 
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]} 
            className="mySwiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <img src={slide.src} alt={`Portfolio Image ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ContainerSwiper>
        <button onClick={handleButtonClick}><FaPlusSquare /> {buttonText}</button>
      </div>
    </PortifolioSection>
  );
};

export default Portifolio;