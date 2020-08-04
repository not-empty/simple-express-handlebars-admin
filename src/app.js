const express = require('express');
const hbs = require('express-hbs');
const fp = require('path');

require('./utils/helpers/hbs-helpers')(hbs);

const routes = require('./routes');

const app = express();

app.use(express.static(fp.join(__dirname, '../public')));
app.engine('hbs', hbs.express4({
  partialsDir: [
    fp.join(__dirname, 'views/partials'),
  ],
  layoutsDir: fp.join(__dirname, 'views/layout'),
  defaultLayout: fp.join(__dirname, 'views/layout/default.hbs'),
}));
app.set('view engine', 'hbs');
app.set('views', fp.join(__dirname, 'views'));

app.use(routes);

module.exports = app;
