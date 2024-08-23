import { useState, useEffect } from 'react';
import { globalInfo } from '../models/GlobalInfoModel';

export const useNavbarViewModel = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  const whatsappUrl = globalInfo.whatsappLink;

  const toggleMenu = () => {
    if (isMobile) {
      setMenuOpen(prev => !prev);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;
    setScrolling(window.scrollY > 10);

    document.querySelectorAll('#listMenu li').forEach(item => {
      item.classList.remove('active');
    });

    document.querySelectorAll('section').forEach(section => {
      const container = section.querySelector('div.container') as HTMLElement;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const containerTop = container ? (container.getBoundingClientRect().top + window.scrollY) : sectionTop;
      const containerBottom = container ? (containerTop + container.offsetHeight) : (sectionTop + section.offsetHeight);

      if (containerTop <= scrollPosition && containerBottom > scrollPosition) {
        const id = section.getAttribute('id');
        const link = document.querySelector(`#listMenu a[href*="${id}"]`) as HTMLElement;
        if (link && link.parentElement) {
          link.parentElement.classList.add('active');
        }
      }
    });
  };

  const handleSmoothScroll = (e: Event) => {
    const target = e.target as HTMLAnchorElement;
    if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
      e.preventDefault();
      const targetId = target.getAttribute('href')?.substring(1);
      const targetSection = document.getElementById(targetId || '');
      const container = targetSection?.querySelector('div.container') as HTMLElement;
      const offset = 100;

      if (targetSection) {
        const scrollToPosition = container
          ? (container.getBoundingClientRect().top + window.scrollY - offset)
          : (targetSection.getBoundingClientRect().top + window.scrollY - offset);
          
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleWhatsappClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    const links = document.querySelectorAll('#listMenu a');
    links.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, [isMobile]);

  return {
    menuOpen,
    scrolling,
    isMobile,
    toggleMenu,
    handleWhatsappClick,
  };
};