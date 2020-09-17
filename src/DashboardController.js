const axios = require('axios');
const { render } = require('nunjucks');

module.exports = {
    async get(request, response){
        response.render('dashboard.njk');
    }
}