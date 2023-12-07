const { GetNeko } = require('../Utilities/GetNeko')

module.exports = async (app) =>{


    app.get('/github', async (req, res) =>{

        return res.redirect("https://github.com/YoloFTW/NekoJs");

    });


}