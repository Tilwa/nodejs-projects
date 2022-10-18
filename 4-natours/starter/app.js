const express = require("express");
const app = express();

//get route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from server side", app: "Natours" });
});
app.post("/test", (req, res) => {
  res.status(200).send("We can post data from this end point");
});

const port = 4000;
app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
