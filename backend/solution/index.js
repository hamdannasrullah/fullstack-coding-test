const express = require("express");
const todosRoutes = require("./routes/todo");

const app = express();
const port = 2030;

app.use(express.json());
app.use(todosRoutes);

app.listen(port, () => {
  console.log("Menjalankan API di " + port)
});


app.get('/' , (req,res) => {
  res.send('<center><h1>  Ini Halaman Todo </h1></center>')
});