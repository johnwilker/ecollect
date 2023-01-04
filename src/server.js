const express = require('express');
const server = express();

// take database from src/database/db, to use require you must insert module.exports into db file
const db = require("./database/db");

// setting up public folder
server.use(express.static('public'));

// setting up req.body for our application
server.use(express.urlencoded({extended: true }));

// using template engine
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})


// set up paths for our app
// home page
// req: request
// res: response
server.get('/', (req, res) => {
  return res.render('index.html', { title: 'Um titulo'});
})

server.get('/create-point', (req, res) => {
  // req.query: Query Strings from our URL
  // console.log(req.query)

  return res.render("create-point.html")
})

server.post('/savepoint', (req, res) => {
  // req.body: Is the body of the form
  // console.log(req.body);

  // insert data into the database
     const query = `
            INSERT INTO places (
                image,
                name,
                address,
                address2,
                state,
                city,
                items
            ) VALUES (?,?,?,?,?,?,?);
        `
     const values = [
       req.body.image,
       req.body.name,
       req.body.address,
       req.body.address2,
       req.body.state,
       req.body.city,
       req.body.items
     ]
     function afterInsertData(err) {
       if (err) {
         console.log(err);
         return res.send("Erro no cadastro")
       }
       console.log("Cadastrado com sucesso")
       console.log(this)

      return res.render("create-point.html", {saved: true});
     }

  db.run(query, values, afterInsertData)
})

server.get('/search', (req, res) => {

  const search = req.query.search;

  if(search == "") {
    // empty search
    return res.render("search-results.html", { total : 0 })
  } 

  // take data from database
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
    if (err) {
      return console.log(err)
    }

    const total = rows.length;

    // show html page with data from database
    return res.render("search-results.html", { places: rows, total })
  })
})

// turn on server
server.listen(3000);