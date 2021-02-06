"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const ApolloServer_1 = require("apollo-server-express/dist/ApolloServer");
// import cookieParser from 'cookie-parser';
const next = require('next');
const bodyParser = require('body-parser');
// const { parse } = require('url');
// const { join } = require('path');
// const { createReadStream } = require('fs');
const nextI18next = require('../i18n');
const routes = require('../src/services/routes/routes');
const express = require('express');
const cors = require('cors');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const nextI18NextMiddleware = require('next-i18next/middleware').default;
// import { Comment, User } from './data/models';
// const path = require("path");
// const url = require("url");
// const get = require('lodash.get');
const compression = require('compression');
const resolvers = require('./schema/resolvers').default;
const typeDefs = require('./schema/typeDefs').default;
var session = require('express-session');
var FileStore = require('session-file-store')(session);
const handle = routes.getRequestHandler(app);
app.prepare().then(() => {
    const server = express();
    server.use(nextI18NextMiddleware(nextI18next));
    server.use(compression());
    server.use(cors());
    // server.options('*', cors())
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(session({
        store: new FileStore({ secret: 'geheimnis' }),
        name: 'qid',
        secret: 'geheimnis',
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            // secure: process.env.NODE_ENV === "production",
            secure: false,
            maxAge: 1000 * 60 * 60 * 24 * 7,
        },
    }));
    server.get('/products/:slug', (req, res) => {
        const actualPage = '/product';
        const productId = JSON.stringify(req.params.slug.split('-').pop());
        const queryParams = { id: productId };
        app.render(req, res, actualPage, queryParams);
    });
    server.get('/shop/:slug', (req, res) => {
        const actualPage = '/product';
        const productId = JSON.stringify(req.params.slug.split('-').pop());
        const queryParams = { id: productId };
        app.render(req, res, actualPage, queryParams);
    });
    server.get('/blogs/:slug', (req, res) => {
        const actualPage = '/blog';
        const blogId = parseInt(req.params.slug.split('-').pop());
        console.log('blogId', blogId);
        const queryParams = { id: blogId };
        app.render(req, res, actualPage, queryParams);
    });
    server.get('/artists/:slug', (req, res) => {
        const actualPage = '/artist';
        const artistId = parseInt(req.params.slug.split('-').pop());
        console.log('artistId', artistId);
        const queryParams = { id: artistId };
        app.render(req, res, actualPage, queryParams);
    });
    server.get('/events/:slug', (req, res) => {
        const actualPage = '/event';
        const eventId = parseInt(req.params.slug.split('-').pop());
        const queryParams = { id: eventId };
        app.render(req, res, actualPage, queryParams);
    });
    server.get('/team/:slug', (req, res) => {
        const actualPage = '/admin';
        const adminId = parseInt(req.params.slug.split('-').pop());
        const queryParams = { id: adminId };
        app.render(req, res, actualPage, queryParams);
    });
    server.post('/blogs/addBlog/:slug', (req, res) => {
        const newBlogId = parseInt(req.params.slug);
        const queryParams = { id: newBlogId };
        app.render(req, res, queryParams);
    });
    const graphqlServer = new ApolloServer_1.ApolloServer({
        context: ({}) => ({}),
        introspection: true,
        resolvers,
        typeDefs,
    });
    graphqlServer.applyMiddleware({ app: server, path: config_1.graphQLPath });
    server.get('*', (req, res) => {
        return handle(req, res);
    });
    /* END EXPRESS ROUTES */
    server.listen(config_1.APP_PORT, () => {
        console.log(`> App ready on ${config_1.APP_URI}`);
        console.log(`> GraphQL ready on ${config_1.GRAPHQL_URL}`);
        console.log(`Dev: ${config_1.dev}`);
    });
});
//# sourceMappingURL=index.js.map