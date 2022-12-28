const express = require('express');
const app = express();
const session = require('express-session');
const cookieparser = require('cookie-parser');
var bodyParser = require('body-parser');
const {check,validationResult} = require('express-validator');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(cookieparser());

app.use(session({
    secret:"key that sign cookie",
    resave:false,
    saveUninitialized:false,
}));

const login = require('./router/login_load');
const default_page = require('./router/load404');
const login_check = require('./router/login_check');
const home = require('./router/home');
const logout = require('./router/logout');

app.set('view engine','ejs');
app.use(express.static('public'));
app.listen(3000,()=>console.log('connected to server'));

app.get('/',login);
app.post('/login',login_check);
app.get('/home',home);
app.post('/logout',logout);
app.use(default_page);