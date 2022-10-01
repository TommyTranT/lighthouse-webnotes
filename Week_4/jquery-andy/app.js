const express = require("express");
const app     = express();

// REQUIRED FOR GETTING HTML TO LINK JS FILES
app.use("/static", express.static('./static/'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});

