"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyle = void 0;
const theme_1 = require("./theme");
const utilty_1 = require("../../utilty");
const styled_components_1 = require("styled-components");
exports.GlobalStyle = styled_components_1.createGlobalStyle `
@font-face {
  font-family: 'Roboto-Regular';
  src: url(${require('../../../public/fonts/Roboto/Roboto-Regular.ttf')}) 
  font-family: 'Roboto-Bold';
  src: url(${require('../../../public/fonts/Roboto/Roboto-Bold.ttf')}) 
   font-family: 'Roboto-Light';
   src: url(${require('../../../public/fonts/Roboto/Roboto-Light.ttf')}) 
   font-family: 'Roboto-Thin';
   src: url(${require('../../../public/fonts/Roboto/Roboto-Thin.ttf')}) 


   font-family: 'Almarai-Regular';
  src: url(${require('../../../public/fonts/Almarai/Almarai-Regular.ttf')}) format('ttf'); 
  
  font-family: 'Almarai-Bold';
  src: url(${require('../../../public/fonts/Almarai/Almarai-Bold.ttf')}) format('ttf'); 

  font-family: 'Almarai-Light';
  src: url(${require('../../../public/fonts/Almarai/Almarai-Light.ttf')}) format('ttf'); 
  


  font-family:'Montserrat-Bold'
  src: url(${require('../../../public/fonts/Montserrat/Montserrat-Bold.ttf')}) 
  format('ttf');  

  font-family:'Montserrat-Medium'
  src: url(${require('../../../public/fonts/Montserrat/Montserrat-Medium.ttf')}) format('ttf'); 

  font-family:'Montserrat-Thin'
  src: url(${require('../../../public/fonts/Montserrat/Montserrat-Thin.ttf')}) format('ttf'); 

  font-family:'Montserrat-Italic'
  src: url(${require('../../../public/fonts/Montserrat/Montserrat-Italic.ttf')}) format('ttf'); 

  font-family:'Montserrat-Light'
  src: url(${require('../../../public/fonts/Montserrat/Montserrat-Light.ttf')}) format('ttf'); 
  
  
  font-family: 'Raleway-Regular';
  src: url(${require('../../../public/fonts/Raleway/Raleway-Regular.ttf')}) 
  format('ttf');

  font-family: 'Raleway-Bold';
  src: url(${require('../../../public/fonts/Raleway/Raleway-Bold.ttf')}) format('ttf'); 

  font-family: 'Raleway-Thin';
  src: url(${require('../../../public/fonts/Raleway/Raleway-Thin.ttf')}) format('ttf');
  font-family:'Raleway-Italic'
  src: url(${require('../../../public/fonts/Raleway/Raleway-Italic.ttf')}) format('ttf'); 

  font-family:'Raleway-Light'
  src: url(${require('../../../public/fonts/Raleway/Raleway-Light.ttf')}) format('ttf'); 

  font-family:'Raleway-Medium'
  src: url(${require('../../../public/fonts/Raleway/Raleway-Medium.ttf')}) format('ttf'); 


  Raleway-Medium
  font-style: normal;
  font-weight: 400;
  font-display: fallback; /* <- this can be added to each @font-face definition */
}
  body {
    margin: 0;
    padding: 0;
    background-color: ${utilty_1.hexa(theme_1.theme.bg.inset3, 0.2)} !important;
    font-family: Roboto,Montserrat-Bold;
  }
  h1,h2,h3,h4,h5,h6,a,strong {
    color: ${utilty_1.tint(theme_1.theme.text.primary, 30)};
  }
  main {
    position: relative;
    top: 0;
    left: 0;
    padding: 0;
    margin-top: calc("60px" + "35px");
  }
`;
//# sourceMappingURL=GlobalStyle.jsx.map