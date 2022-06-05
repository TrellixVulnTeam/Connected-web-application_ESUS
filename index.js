const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
app.use(expressLayouts);
app.use(express.urlencoded());
app.use(cookieParser());
//extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
//use express router
app.use('/', require('./routes'));
//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
//to interact with static pages
app.use(express.static('./assets'));



app.listen(port, function(err){
    if (err){
        console.log(`Error: ${err}`);
    }
    console.log(`Server is running: ${port}`);
});