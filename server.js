const express = require("express");
const app = express();
require("dotenv").config();

// Connection database
const { connectDB } = require("./config/connect.db");
connectDB();

app.use(express.json());
app.use(express.urlencoded());

// use routers
app.use("/api/travels", require("./routers/travels"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
