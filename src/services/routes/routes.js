"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = exports.Link = void 0;
const routes = require('next-routes');
module.exports = routes()
    .add('index', '/')
    .add('register', '/signup')
    .add('forgetPassword', '/forget_pass')
    .add('resetPassword', '/reset_pass')
    .add('login', '/login')
    .add('about', '/about')
    .add('contact', '/contact')
    .add('security', '/security')
    .add('guide', '/guide')
    .add('addProduct', '/products/add_product')
    .add('addEvent', '/events/add_event')
    .add('product', '/products/:id')
    .add('blog', '/blogs/:slug')
    .add('artist', '/artists/:slug')
    .add('event', '/events/:id')
    .add('team', '/team/:id')
    .add('AddBlog', '/blogs/addBlog/:id')
    .add('AddEvent', '/events/addEvent/:id')
    .add('blogsPage', '/blogs', 'blogs')
    .add('artistsPage', '/artists', 'artists')
    .add('eventsPage', '/events', 'events')
    .add('shop', '/shop')
    .add('productsPage', '/products', 'products')
    .add('teamPage', '/team', 'team')
    .add('cart', '/cart')
    .add('checkout', '/checkout')
    .add('account', '/account');
exports.Link = routes.Link;
exports.Router = routes.Router;
//# sourceMappingURL=routes.js.map