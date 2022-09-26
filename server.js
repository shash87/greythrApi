const express = require("express");

const app = express();

const employees = require("./routes/employees");


const port = process.env.PORT || 5000;

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(allowCrossDomain);

app.use("/api/employees", employees);


app.listen(port, () => console.log(`Server running on port ${port}`));