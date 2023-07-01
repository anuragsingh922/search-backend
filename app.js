const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mongoose = require("mongoose");
const dotenv = require("dotenv");

const { searchstreaming } = require("./controller.js");

const app = express();
dotenv.config({ path: "./config.env" });

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cors());

// const db = process.env.DATABASE.replace(
//   "<PASSWORD>",
//   process.env.DATABASE_PASSWORD
// );

// try {
//   mongoose
//     .connect(db, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//     })
//     .then(() => console.log("Connection Successful!"));
// } catch (err) {
//   console.log(err);
// }

//Routes
app.get("/", (req, res) => {
  res.send("Search server is running... ");
});
app.post("/api/search_streaming", searchstreaming);

const port = 5000;
app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
