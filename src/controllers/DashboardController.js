const axios = require('axios');
const { render } = require('nunjucks');

module.exports = {
    async get(request, response){

        if (request.session.token === undefined)
            return response.redirect('/login');

        response.render('dashboard.njk');
    }
}