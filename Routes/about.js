const { GetNeko } = require('../Utilities/GetNeko')

module.exports = async (app) =>{


    app.get('/about', async (req, res) =>{

        return res.status(200).render('about');

    });


}