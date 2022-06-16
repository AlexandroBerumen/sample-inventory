const express = require("express");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.listen(5000, (req, res) => {
	console.log(`listening on port: ${PORT} `);
});
