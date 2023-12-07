const { GetNeko } = require('../Utilities/GetNeko')
const { GetEndpoints } = require('../Utilities/GetEndpoints')

module.exports = async (app) =>{


    app.get('/', async (req, res) =>{

        let Neko = await GetNeko('neko');

        let Endpoints = await GetEndpoints();

        return res.status(200).render('index', {Neko, Endpoints, Current: "Neko"});

    });


    app.post('/', async (req, res) => {

        let {options} = req.body;

        //if options not set
        if(!options) return res.redirect("/");

        let Endpoints = await GetEndpoints();

        //if option not available
        if(!Object.keys(Endpoints).includes(options)) return res.redirect("/");

        //get new image with option
        let Neko = await GetNeko(options);

        return res.status(200).render('index', {Neko, Endpoints, Current: options});

    });
    
}