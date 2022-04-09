var db = require("../database-mysql");



var login=(req,res)=>{
  const username=req.body.username
const password=req.body.password
const sqlSel='SELECT * FROM users WHERE  email=? AND password=?' 
db.query(sqlSel,[username,password],(err,result)=>{
  if(err){
      res.send(err)
  }
  if(result.length>0){
      res.send("yes")
  }else{
      res.send("no")
  }
})
}

var signup= (req,res)=>{
  const username=req.body.username
  const email=req.body.email
  const password=req.body.password
  const sql=`SELECT * FROM users WHERE email='${email}'`
  db.query(sql,(err,result)=>{
      if(err){
          res.send(err)
      }
      if(result.length>0){
          res.send("user already exist")
      }else{
          db.query("INSERT INTO users (username,email,password) VALUES (?,?,?)",[username,email,password],(err,result)=>{
              if(err){
                  res.send(err)
              }
              else{
  res.send('yes')
              }
          })
      }
  })
  }


module.exports = { login, signup };
