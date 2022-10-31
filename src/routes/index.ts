import express from "express";
const router = express.Router();

interface Details {
  fullName: string;
  email?: string;
  password?: string;
  phone?: string;
  age?: number;
  gender?: string;
  address?: string;
  developer?: boolean;
}

const person1: Details = {
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

export default router;
