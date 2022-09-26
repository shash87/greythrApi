const express = require("express");

const app = express();

const employees = require("./routes/employees");


const port = process.env.PORT || 5000;

app.use("/api/employees", employees);


app.listen(port, () => console.log(`Server running on port ${port}`));