import express from "express";

const app = express();
const port = 8003;

app.get("/", (req, res) => {
  // res.json({ message: "Hello World!" });
  // res.set("X-APP-TOKEN", "bismillah");
  res.status(200).end();
});

// app.get("/", (req, res) => {
//   if (req.query.name) {
//     res.status(200).send(`Hello ${req.query.name}!`);
//   } else {
//     res.status(400).end();
//   }
// });

// export default app;

app.listen(port, () => {
  console.log(`\nServer is running on http://localhost:${port}`);
});
