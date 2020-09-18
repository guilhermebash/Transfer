const axios = require('axios');
const { render } = require('nunjucks');
const connection = require('../../connection');
module.exports = {

    menus(request, response){

        if (request.session.token === undefined)
            return response.redirect('/login');

        return response.render('menus.njk');
    },

    async get(request, response){

        if (request.session.token === undefined)
            return response.redirect('/login');

        let data = {};

        let { date_init, date_end } = request.query;

        if (date_init != '')
            data.date_init = date_init;

        if (date_end != '')
            data.date_end = date_end;

        const result = await axios({
            method: 'GET',
            url: `${connection}/unidades`,
            headers: {
              'Authorization': request.session.token
            },
            data: data
        });

        return response.render('dashboard.njk', {result:result.data});
    }
}