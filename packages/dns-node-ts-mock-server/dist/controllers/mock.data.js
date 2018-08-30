"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@dns/utils");
const time = utils_1.parseDateHumanReadable({ date: new Date().toString(), withoutOffset: true });
exports.data = {
    name: 'Awesome McEpic',
    username: '4iamave',
    password: '54D03B8C1BEA08EF8896747EDC304FF22FBE71A9D764EF9A3EE7B1A4EA60A622',
    uuid: 1,
    createdAt: time
};
//# sourceMappingURL=mock.data.js.map