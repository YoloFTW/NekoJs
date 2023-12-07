const express      = require('express');
const fs           = require('fs');
const BodyParser   = require('body-parser');

const http = require('http');

require('dotenv').config();

var options = {};

let app = express();

var server = http.createServer(options, app);

//Static web files folder for serving static files
app.use(express.static(__dirname + '/public'));

//EJS Templating for dynamic content
app.engine('ejs', require('ejs').renderFile);
app.set('views', './Public');
app.set('view engine', 'ejs');
app.set('trust proxy', true)

//URLEncoded parser
app.use(BodyParser.urlencoded({extended: true}));

//JSON parser
app.use(BodyParser.json());

//Remove x-powered-by header
app.disable('x-powered-by');

//Require all the routes from the /routes directory
const routes = fs.readdirSync('./Routes').filter(file => file.endsWith('.js'))
routes.forEach(route =>{
    const r = require(`./Routes/${route}`);
    r(app);
});


server.listen(process.env.PORT, () =>{
    console.log(`Listening on ${process.env.PORT}`);
});
