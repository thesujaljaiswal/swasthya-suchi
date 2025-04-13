import { app } from "./app.js";
import dotenv from "dotenv";

// Configuring path for dotenv file
dotenv.config({
  path: "./.env",
});

// initial route
app.get("/", (req, res) => {
  res.send(`<h1>Hello World!!</h1>`);
});

// App running on this specific port
app.listen(process.env.PORT || 4000, () => {
  console.log(`listening on port http://localhost:${process.env.PORT}`);
});
