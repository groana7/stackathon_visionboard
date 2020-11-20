// this file is the server entry point

// imports
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

// convention to be all caps
const port = 4000;

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./api'));

// where the static files are
app.use(express.static(path.join(__dirname, '../public')));

// Send Index HTML
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Handle 500 Errors
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(port, () => {
  console.log(`Mixing it up on PORT ${port}`);
});