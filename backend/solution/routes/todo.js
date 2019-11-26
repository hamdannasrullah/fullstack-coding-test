const router = require('express').Router();
const connect = require('../connection/index.js');

//POST TODO
router.post('/addtodo', (req, res) => {
  let query1 = `INSERT INTO todos SET ?;`;
  let query2 = `SELECT * FROM todos WHERE id = ?;`;
  let data = req.body;

  connect.query(query1, data, (err, result) => {
    if (err) return res.send(err.sqlMessage);

    connect.query(query2, result.insertId, (err, result) => {
      if (err) return res.send(err);

      res.send(result);
    })
  })
})


// GET TODO
router.get('/todos', (req, res) => {
    let query1 = `SELECT * FROM todos;`;

    connect.query(query1, (err, result) => {
      if (err) return res.send(err.sqlMessage);

      res.send(result);
    })
  })


  // GET A TODO
router.get('/todos/:todoid', (req, res) => {
    let query1 = `SELECT * FROM todos WHERE id = ?;`;
  
    connect.query(query1, (err, result) => {
      if (err) return res.send(err.sqlMessage);
  
      res.send(result);
    })
  })


// PUT TODO
router.patch('/edittodo/:todoid', (req, res) => {
    let query1 = `UPDATE todos SET ? WHERE id = ?;`;
    let query2 = `SELECT * FROM todos WHERE id = ?;`;
    let data = [req.body, req.params.todoid];
    let id = req.params.todoid;

    connect.query(query1, data, (err, result) => {
      if (err) return res.send(err.sqlMessage);
  
      var resultq1 = result;

      connect.query(query2, id, (err, result2) => {
        if (err) return res.send(err.message);

        res.send({
          resultq1,
          result2
        });
      })
    })
  })


// DELETE A TODO
router.delete('/deletetodo/:todoid', (req, res) => {
    let query1 = `DELETE FROM todos WHERE id = ?;`;
    let query2 = `SELECT * FROM todos;`;
    let id = req.params.todoid;

    connect.query(query1, id, (err, result) => {
      if (err) return res.send(err.sqlMessage);

      var resultq1 = result;

      connect.query(query2, (err, result2) => {
        if (err) return res.send(err.message);

        res.send({
          resultq1,
          result2
        });
      })
    })
  })



  module.exports = router;

