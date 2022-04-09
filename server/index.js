const express = require("express");
const cors = require("cors");
const itemRoutes = require('./routes/item.routes')

const userRoutes=require('./routes/user.router')
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('./database-mysql');
// var items = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));

app.use("/api/item", itemRoutes);
app.use("api/user",userRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
