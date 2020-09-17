const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const session = require('express-session');

const routes = require('./routes');

nunjucks.configure(__dirname + '/views');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('view engine', '.njk');

app.use(session({secret: 'keyboard cat'}));

app.use('/public', express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(routes);

app.listen('3333');