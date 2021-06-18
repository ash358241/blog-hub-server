const express = require('express');
const app = express();

console.log("Welcome, Ashraf the great!!!");

app.use("/", (req, res) => {
    console.log("this is main url buddy");
})

app.listen("5000", () => {
    console.log("Backend is running!");
})