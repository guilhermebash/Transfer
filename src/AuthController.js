const axios = require('axios');
const { render } = require('nunjucks');
const connection = require('../connection');

module.exports = {
    async get(request, response){
        response.render('login.njk');
    },

    async post(request, response){

        console.log(connection);

        let { user, password } = request.body;

        const result = await axios.post(
            `${connection}/login`,
            {user:user, password:password}
        );

        if (result.data.status === 1){
            request.session.token = result.data.token;
            return response.redirect('/dashboard');
        }

        return response.render('login.njk', {error:true, message:result.data.message, user:user});
    }
}