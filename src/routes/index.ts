import express from "express";
const router = express.Router();

interface Details {
  slackUsername: string;
  backend: boolean;
  age: number;
  bio: string;
}

const myREsponse: Details = {
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

export default router;
