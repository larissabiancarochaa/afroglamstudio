import { css } from 'styled-components';

const fontFaces = css`
  @font-face {
    font-family: 'Gotham Black';
    src: url('./assets/fonts/Gotham-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham Black Italic';
    src: url('./assets/fonts/Gotham-BlackItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gotham Bold';
    src: url('./assets/fonts/Gotham-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham Bold Italic';
    src: url('./assets/fonts/Gotham-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gotham Book';
    src: url('./assets/fonts/Gotham-Book.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham Book Italic';
    src: url('./assets/fonts/Gotham-BookItalic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Gotham Light';
    src: url('./assets/fonts/Gotham-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham XLight';
    src: url('./assets/fonts/Gotham-XLight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham XLight Italic';
    src: url('./assets/fonts/Gotham-XLightItalic.ttf') format('truetype');
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'DM Sans';
    src: url('./assets/fonts/DMSans-VariableFont_opsz,wght.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
  }
`;

export const fonts = {
  fontFamily1: 'Gotham Book',
  fontFamily2: 'Gotham Bold',
  fontFamily3: 'Gotham Light',
  fontFamily4: 'Gotham Black',
  fontFamily5: 'Gotham Black Italic',
  fontFamily6: 'Gotham Bold Italic',
  fontFamily7: 'Gotham Book Italic',
  fontFamily8: 'Gotham XLight',
  fontFamily9: 'Gotham XLight Italic',
  fontFamily10: 'DM Sans'
};

export default fontFaces;