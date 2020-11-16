const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const session = require('express-session');
const dateFilter = require('nunjucks-date-filter');

const routes = require('./routes');

nunjucks.configure(__dirname + '/views');

let env = nunjucks.configure('views', {
    autoescape: true,
    express: app
});


env.addFilter('date', dateFilter);

app.set('view engine', '.njk');

app.use(session({secret: 'keyboard cat'}));

app.use('/public', express.static(`${__dirname}/public`));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333;
app.listen(PORT);
