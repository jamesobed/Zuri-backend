"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const myREsponse = {
    slackUsername: "sirObed",
    backend: true,
    age: 28,
    bio: "Full stack web developer",
};
/* GET home page. */
router.get("/", function (req, res, next) {
    // res.render("index", { title: "Express" });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(myREsponse));
});
exports.default = router;
//# sourceMappingURL=index.js.map