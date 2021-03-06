const axios = require('axios');
const { render } = require('nunjucks');
const connection = require('../../connection');
module.exports = {

    menus(request, response){

        if (request.session.token === undefined)
            return response.redirect('/login');

        return response.render('menus.njk');
    },

    async historico(request, response){
        let unidade = request.params.unidade;
        const result = await axios({
            method: 'GET',
            url: `${connection}/historicos`,
            // headers: {
            //   'Authorization': request.session.token
            // },
            data: {unidade:unidade}
        });

        const url_recibo = `${connection}/recomprovante?token=${request.session.token}&unidade=${unidade}`;
        return response.render('historicos.njk', {result:result.data, url_recibo:url_recibo});
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

        const url_recibo = `${connection}/comprovante?token=${request.session.token}`

        return response.render('dashboard.njk', {result:result.data, url_recibo:url_recibo});
    }
}