
const express = require("express");
const app = express();
const db = require("db.js");

app.use(express.json());

app.get("/:id", function(req, res) {
  const { id } = req.params;

  res.json(req.body);
});

app.post("/", async function(req, res) {
  const { name, id } = req.body;
   const info = await db.query('INSERT INTO facile (name, id) VALUES ($1) RETURNING *' [name, id])

  res.json(info);
});

app.put("/encripts/:id", function(req, res) {
      const { name, id } = req.params;
      db.query(` SELECT name INSERT INTO facile(name) 
      values ('name', encrypt('name', 'semsal','aes' )) from id`[name, id])
    
      if(!name)
      return res.json([{
          "code":"E_VALIDATION_FAILURE",
          "message": "O campo \"name\" é obrigatório"
        }])

        res.json(name)
});

app.put("/decripts/:id", function(req, res) {
  const { id } = req.params;
  db.query(`SELECT name
  convert_from(decrypt(name::bytea, 'semsal', 'aes'), 'SQL_ASCII')
   from id`[id])

  if(!id)
  return res.json([{
      "code":"E_VALIDATION_FAILURE",
      "message": "O campo \"id\" é obrigatório"
    }])

    res.json(req.body)
});


app.listen(3000, function() {
  console.log("Server is running");
});
