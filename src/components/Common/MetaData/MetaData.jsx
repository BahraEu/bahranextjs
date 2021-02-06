"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const config_1 = require("../../../../config/config");
const MetaData = () => (<>
    <meta charSet="utf-8"/>
    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    
    <meta httpEquiv="X-UA-Compatible" content="IE=Edge"/>
    <link rel="manifest" href="../../../manifest/manifest.json"/>
    <link rel='shortcut icon' href="../../../../public/favicon.ico"/>
    <meta name='viewport' content='width=device-width, initial-scale=1'/>
    <meta name='apple-mobile-web-app-capable' content='yes'/>
    <meta name='apple-mobile-web-app-status-bar-style' content='#E3D26F'/>
    <meta name='apple-mobile-web-app-title' content='BAHRA'/>
    <link rel='apple-touch-icon' href='../../../images/icons/bahra-icon-57x57.png' sizes='57x57'/>
    <link rel='apple-touch-icon' href='../../../images/icons/bahra-icon-60x60.png' sizes='60x60'/>
    <link rel='apple-touch-icon' href='/images/icons/bahra-icon-72x72.png' sizes='72x72'/>
    <link rel='apple-touch-icon' href='../../../images/icons/bahra-icon-76x76.png' sizes='76x76'/>
    <link rel='apple-touch-icon' href='../../../images/icons/bahra-icon-114x114.png' sizes='114x114'/>
    <link rel='apple-touch-icon' href='../../../images/icons/bahra-icon-120x120.png' sizes='120x120'/>
    <link rel='apple-touch-icon' href='../../../images/icons/bahra-icon-144x144.png' sizes='144x144'/>
    <link rel='apple-touch-icon' href='../../../images/icons/bahra-icon-152x152.png' sizes='152x152'/>
    <link rel='apple-touch-icon' href='../../../images/icons/bahra-icon-180x180.png' sizes='180x180'/>

    <meta name='msapplication-TileColor' content='#fff'/>
    <meta name='theme-color' content='rgba(57, 150, 255, 1)'/>
    <meta name='description' content='Web site created using create-react-app'/>
    <link rel='apple-touch-icon' href='../../../images/logo.png'/>

   
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${config_1.GA_TRACKING_ID}`}/>
   
      <script 
// eslint-disable-next-line react/no-danger
dangerouslySetInnerHTML={{
    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${config_1.GA_TRACKING_ID}', { 'anonymize_ip': true });
                    `,
}}/>

  </>);
exports.default = MetaData;
//# sourceMappingURL=MetaData.jsx.map