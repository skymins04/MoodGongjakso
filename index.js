const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const __htmlroute = `${__dirname}/assets/html`;

// renderer engine setting

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// middlewares

app.use(express.static(__dirname+'/assets'));

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.render(`${__htmlroute}/home.html`);
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});