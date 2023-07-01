const dotenv = require("dotenv");
const axios = require("axios");
// const User = require("./models/userModel.js");
// const Feedback = require("./models/feedbackModel.js");

dotenv.config({ path: "./config.env" });

const searchstreaming = async (req, res) => {

  console.log("Se--stream");
  console.log(req.body);


  try {
    // Set up response stream
    // res.setHeader("Content-Type", "text/event-stream");
    // res.setHeader("Cache-Control", "no-cache");
    // res.setHeader("Connection", "keep-alive");
    // res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Transfer-Encoding", "chunked"); // Enable chunked encoding



    const response = await axios({
      method: "POST",
      url: "http://35.195.91.213/internet",
      data: req.body,
      responseType: "stream",
    });


    // Pipe the streamed response to the client
    response.data.on("data", (chunk) => {
      // Send each chunk individually
      res.write(chunk);
    });
    
    response.data.on("end", () => {
      // End the response stream
      res.end();
    });


  } 
  catch (err) {
    console.log(err);
  }
};


module.exports = { searchstreaming };
