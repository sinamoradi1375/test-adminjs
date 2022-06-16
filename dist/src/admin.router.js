"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var admin_bro_expressjs_1 = require("admin-bro-expressjs");
var buildAdminRouter = function (admin) {
    var router = (0, admin_bro_expressjs_1.buildRouter)(admin);
    return router;
};
exports.default = buildAdminRouter;
