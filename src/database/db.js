//import the sqlite dependencies to your file with the line below
const sqlite3 = require("sqlite3").verbose()

//create db object that will make changes on your db
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//use the database object to make our operations
// db.serialize(() => {
//   // with SQL i'm going to

//   // 1 create a table
//   db.run(`
//          CREATE TABLE IF NOT EXISTS places (
//              id INTEGER PRIMARY KEY AUTOINCREMENT,
//              image TEXT,
//              name TEXT,
//              address TEXT,
//              address2 TEXT,
//              state TEXT,
//              city TEXT,
//              items TEXT
//          );
//      `)
//   // 2 insert data into the table
//   const query = `
//          INSERT INTO places (
//              image,
//              name,
//              address,
//              address2,
//              state,
//              city,
//              items
//          ) VALUES (?,?,?,?,?,?,?);
//      `
//   const values = [
//     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80",
//     "Papersider",
//     "Guilherme Gemballa, Jardim América",
//     "Nº 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Resíduos Eletrônicos, Lâmpadas",
//   ]
//   function afterInsertData(err) {
//     if (err) {
//       return console.log(err)
//     }
//     console.log("Cadastrado com sucesso")
//     console.log(this)
//   }

  // db.run(query, values, afterInsertData)

  // 3 search data in the table
  // db.all(`SELECT * FROM places`, function (err, rows) {
  //   if (err) {
  //     return console.log(err)
  //   }
  //   console.log("Aqui estão seus registros")
  //   console.log(rows)
  // })

  // db.all(`SELECT name FROM places`, function (err, rows) {
  //   if (err) {
  //     return console.log(err)
  //   }
  //   console.log("Aqui estão seus registros")
  //   console.log(rows)
  // })

  // 4 delete data in the table
  // db.run(`DELETE FROM places WHERE id = ?`, [2], function (err) {
  //   if (err) {
  //     return console.log(err)
  //   }
  //   console.log("Registro deletado com sucesso!");
  // })

  //  db.run(`DELETE FROM places`, function (err) {
  //    if (err) {
  //      return console.log(err)
  //    }
  //    console.log("Registro deletado com sucesso!")
  //  })
// })
