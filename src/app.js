const express = require('express');
const hbs = require('express-hbs');
const fp = require('path');

require('./utils/helpers/hbs-helpers')(hbs);

const routes = require('./routes');

function relative(path) {
  return fp.join(__dirname, path);
}

const app = express();

app.use(express.static(fp.join(__dirname, '../public')));
app.engine('hbs', hbs.express4({
  partialsDir: [
    relative('views/partials'),
  ],
  layoutsDir: relative('views/layout'),
  defaultLayout: relative('views/layout/default.hbs'),
}));
app.set('view engine', 'hbs');
app.set('views', relative('views'));

app.use(routes);

module.exports = app;