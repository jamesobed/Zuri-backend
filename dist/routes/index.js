"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const person1 = {
    fullName: "John Doe",
    email: "jon@test.com",
    password: "123456",
    phone: "1234567890",
    age: 30,
    gender: "male",
    address: "123 Main St",
    developer: true,
};
/* GET home page. */
router.get("/", function (req, res, next) {
    // res.render("index", { title: "Express" });
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(person1));
});
exports.default = router;
//# sourceMappingURL=index.js.map