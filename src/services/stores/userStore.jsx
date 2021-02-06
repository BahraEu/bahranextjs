"use strict";
// import {types, getParent, flow, Instance, getRoot,
//    onSnapshot ,getSnapshot, SnapshotOut, SnapshotIn} from 'mobx-state-tree';
// import { string } from 'mobx-state-tree/dist/internal';
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStore = exports.wpUser = void 0;
const mobx_state_tree_1 = require("mobx-state-tree");
exports.wpUser = mobx_state_tree_1.types.model('User', {
    id: mobx_state_tree_1.types.identifier,
    userId: mobx_state_tree_1.types.integer,
});
exports.UserStore = mobx_state_tree_1.types
    .model('UserStore', {
    identifier: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.identifier, 'UserStore'),
    users: mobx_state_tree_1.types.map(exports.wpUser),
})
    .actions(self => ({
    createUser(userJson) {
        const user = exports.wpUser.create(Object.assign(Object.assign({}, userJson), { id: `user_${userJson.id}` }));
        self.users.set(user.id, user);
        return user;
    },
    createOrGetUser(userJson) {
        const existingUser = self.users.get(`user_${userJson.id}`);
        return existingUser ? existingUser : self.users.createUser(userJson);
    },
}));
//# sourceMappingURL=userStore.jsx.map