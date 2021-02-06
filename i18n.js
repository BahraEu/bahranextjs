'use strict';

const NextI18Next = require('next-i18next').default;

const options = {
    defaultLanguage: 'English',
    otherLanguages: ['Arabic'],
    fallbackLng: 'English',
    ignoreRoutes: ['/service-worker.js'],
    interpolation: {
        format: function(value, format, lng) {
            if (format === 'uppercase') {
                return value.toUpperCase();
            }
            if (format === 'currency') {
                return new Intl.NumberFormat(lng).format(Number(value)); // under node 11, only formats in US currency
            }
            if (value instanceof Date) {
                return require('moment')(value).format(format); // @todo use lighter lib than moment
            }
            return value;
        },
    },
};

const nextI18NextInstance = new NextI18Next(options);
module.exports = nextI18NextInstance;
