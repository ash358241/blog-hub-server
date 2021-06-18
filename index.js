const express = require('express');
const app = express();

app.use("/", (req, res) => {
    console.log("this is main url");
})

app.listen("3000", () => {
    console.log("Backend is running!");
})