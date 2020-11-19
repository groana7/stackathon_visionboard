const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// where the static files are
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`Serving on PORT ${port}`);
});