import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Sobre from './components/Sobre/Sobre';
import Servicos from './components/Servicos/Servicos';
import Portifolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import { lightTheme, darkTheme } from './colors';
import { globalInfo } from './models/GlobalInfoModel'; 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    document.title = globalInfo.siteTitle;
  }, []); 

  return (
    <ThemeProvider theme={{ ...theme, toggleTheme }}>
      <GlobalStyles />
      <Navbar />
      <main>
        <Banner />
        <Sobre />
        <Servicos />
        <Portifolio />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;