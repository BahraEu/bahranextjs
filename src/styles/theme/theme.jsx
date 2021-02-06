"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dark = exports.Light = exports.theme = void 0;
const darkTheme_1 = require("./darkTheme");
const lightTheme_1 = require("./lightTheme");
exports.theme = Object.assign(Object.assign(Object.assign({}, lightTheme_1.lightTheme), darkTheme_1.darkTheme), { fonts: {
        Roboto: ['Roboto-Regular ', 'Roboto-Thin', 'Roboto-Bold', 'Roboto-Light'],
        Montserrat: ['Roboto-Regular ', 'Montserrat-Thin', 'Montserrat-Bold', 'Montserrat-Light'],
        Almarai: ['Roboto-Regular ', 'Almarai-Thin', 'Almarai-Bold', 'Almarai-Light'],
        Raleway: ['Raleway-Regular ', 'Raleway-Thin', 'Raleway-Bold', 'Raleway-Light']
    }, social: {
        facebook: '#1877f2',
        twitter: '#00ACED',
    }, lineHeights: {
        body: 1.6,
        heading: 1.2,
        code: 1.6,
    }, fontWeights: {
        body: 400,
        subheading: 500,
        link: 600,
        bold: 700,
        heading: 800,
    }, fontSizes: [
        '0.4rem',
        '0.6rem',
        '0.8rem',
        '1rem',
        '1.2rem',
        '1.5rem',
        '1.875rem',
        '2.25rem',
    ], errors: ['#7A1414', '#BE0A0A', '#FF4F4F', '#FFC6C6', '#FFF3F3'], warnings: ['#684B00', '#CC9C23', '#FFCB44', '#FFE6A6', '#FFF8E7'], success: ['#07822A', '#49B267', '#67D987', '#AEF1C1', '#E1FFE9'], radii: ['3px', '.4rem', '.5rem', '.6rem'], space: ['0.4em', '0.6em', '.8em', '1em', '1.6em'], shadows: {
        default: '0 4px 8px rgba(0,0,0,0.08)',
        hover: '0 8px 24px rgba(0,0,0,0.10)',
        active: '0 6px 20px rgba(0,0,0,0.09)',
        button: '0 4px 12px rgba(0,0,0,0.08)',
        largeHover: '0 1px 0.4px rgba(0, 0, 0, 0),0 1.7px 0.8px rgba(0, 0, 0, 0.001),0 2.3px 1.3px rgba(0, 0, 0, 0.002),0 2.8px 2px rgba(0, 0, 0, 0.004),0 3.3px 2.9px rgba(0, 0, 0, 0.007),0 4px 4.1px rgba(0, 0, 0, 0.012),0 4.9px 5.8px rgba(0, 0, 0, 0.018),0 6.3px 8.4px rgba(0, 0, 0, 0.029),0 8.8px 12.9px rgba(0, 0, 0, 0.05),0 15px 23px rgba(0, 0, 0, 0.11)',
    }, animations: {
        default: '0.15s ease-out',
        hover: '0.15s ease-in',
        active: '0.15s ease-in-out',
    }, borders: { basic: 'solid .125rem' }, breakpoints: [
        '1440px',
        '1256px',
        '1080px',
        '968px',
        '768px',
        '512px',
        '420px',
    ], buttons: {
        primary: {
            backgroundColor: '#6DC1FD',
            color: '#ffffff',
            margin: '0 1rem',
            fontSize: '1.4rem',
            padding: '.8rem 1rem',
            textTransform: 'uppercase',
            borderRadius: '.4rem',
        },
        topic: {
            backgroundColor: '#E2F3FF',
            color: '#3290D4',
            borderRadius: '.3rem',
            fontSize: '.8rem',
            padding: '.3rem',
            paddingRight: '.5rem',
            paddingLeft: '.5rem',
            letterSpacing: 0.5,
            fontWeight: 'normal',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#F3FAFF',
            },
            '&:not(:last-child)': {
                marginRight: '1rem',
            },
        },
        direction: ['ltr',
            'rtl',]
    } });
exports.Light = Object.assign(Object.assign({}, exports.theme), lightTheme_1.lightTheme);
exports.Dark = Object.assign(Object.assign({}, exports.theme), darkTheme_1.darkTheme);
//# sourceMappingURL=theme.jsx.map