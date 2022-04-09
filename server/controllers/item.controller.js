var db = require("../database-mysql");



var selectAll = function (req, res) {
  db.query("SELECT * FROM items", (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};
var insertItem=(req,res)=>{
  db.query('insert into items set ?',req.body,(err,result)=>{
if(err){
  res.send(err)
}else{
  res.send(result)
}})
}
var deleteItem=(req,res)=>{
  db.query(`delete from items where id=${req.params.id}`,(err,result)=>{
if(err){
  res.send(err)
}else{
  res.send(result)
}})
}
var updateItem=(req,res)=>{
  db.query(`UPDATE items SET  description = '${req.body.description}' , quantity = '${req.body.quantity}' , price = '${req.body.price}'  WHERE id = ${req.params.id}`,(err,result)=>{
if(err){
  res.send(err)
}else{
  res.send('yes')
}})
}



module.exports = { selectAll,insertItem,deleteItem,updateItem };
