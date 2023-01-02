const { request } = require( 'express' );
const express = require('express');
const server = express();
// setting up public folder
server.use(express.static('public'));

// using template engine
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// set up paths for our app
server.get('/', (req, res) => {
  return res.render('index.html', { title: 'Um titulo'});
})
server.get('/create-point', (req, res) => {
  return res.render('create-point.html');
})
server.get('/search', (req, res) => {
  return res.render('search-results.html');
})

// turn on server
server.listen(3000);