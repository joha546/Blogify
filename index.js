const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();
const PORT = 8000;     // we'll replace it by environment variable while deploying.

// Middlewares
app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));