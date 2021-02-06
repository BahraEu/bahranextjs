"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.isUserValidated = exports.isEmpty = void 0;
const config_1 = __importDefault(require("config/config"));
const parseCookies_1 = __importDefault(require("./parseCookies"));
const _1 = require(".");
const wp_user_1 = require("../graphql/queries/wp-user");
// import { User } from '../types/User';
/**
 * Returns true if the value is undefined/null/empty object/empty string.
 *
 * @param value
 * @return {boolean}
 */
const isEmpty = value => value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0);
exports.isEmpty = isEmpty;
/**
 * Check if user is logged in.
 *
 * @return {object} Auth Object containing token and user data, false on failure.
 */
const isUserValidated = () => {
    if (!exports.isEmpty) {
        let authTokenData = _1.isServer
            ? parseCookies_1.default().authToken
            : localStorage.getItem(config_1.default.WP_authToken);
        let userID = _1.isServer ? parseCookies_1.default().userID : localStorage.getItem(config_1.default.userID);
        let userLoggedInData = {};
        if (!exports.isEmpty(authTokenData)) {
            authTokenData = JSON.parse(authTokenData);
            userID = JSON.parse(userID);
            if (!exports.isEmpty(authTokenData)) {
                userLoggedInData = { authTokenData, userID };
            }
        }
        return userLoggedInData;
    }
    else {
        let userLoggedInData = {};
        let authTokenData = _1.isServer ? parseCookies_1.default().authToken : parseCookies_1.default().authToken;
        let userID = _1.isServer ? parseCookies_1.default().userID : parseCookies_1.default().userID;
        if (!exports.isEmpty(authTokenData)) {
            authTokenData = JSON.parse(authTokenData);
            userID = JSON.parse(userID);
            if (!exports.isEmpty(authTokenData)) {
                userLoggedInData = { authTokenData, userID };
            }
            return userLoggedInData;
        }
    }
};
exports.isUserValidated = isUserValidated;
/**
 * Logout the user.
 *
 * @param {string} urlToRedirect URL where user needs to be redirected after logout.
 *
 * @return {void}
 */
const getUser = async (client, userID) => {
    await client.query({ query: wp_user_1.WP_USER,
        variables: { id: (userID) },
    }).then(async (data) => {
        console.log('ddddddddddddddddddddddddddddd', data);
        const wpUser = data.data.user;
        const loading = data.loading;
        console.log('wpUser', wpUser, loading);
        if (!exports.isEmpty(wpUser)) {
            //   await userStore.createUser(wpUser)
        }
        return ({ wpUser, loading });
    }).catch((err) => console.error(err));
};
exports.getUser = getUser;
// export const getUsers = async(client)=>
//  await client.query({query:GET_ALL_WP_USERS}).then( async(data) => {
//    const wpUsers=!isEmpty(data.users) ?data.users.nodes:null
//    console.log('ddddddddddddddddddddddddddddd wpUsers',data.data.users.nodes,wpUsers)
// return wpUsers
//  }).catch((err)=>console.error(err)
//  )
//# sourceMappingURL=auth-functions.js.map