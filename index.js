const express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    app = express(),
    routes = require("./routes/index");

app.use(bodyParser.json());
app.use(cors());

for (const r in routes) {
    app.use("/" + r, routes[r]);
}
const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log("Server is listening on port :", port);
});