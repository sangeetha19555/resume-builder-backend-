const express = require("express");
const userRoute = require("./routes/userRoute");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

require("./dbConnect");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/user/", userRoute);

app.get("/", (req, res) => res.send("API is running  🌎 !!!"));

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => console.log("APP is Connected on PORT ", PORT));
