const express = require("express");
const app = express()

app.get("/", (req, res) => {
    res.send("GET response from / route")
})

app.listen(8080, () => {
    console.log("server is up on port 8080")
})