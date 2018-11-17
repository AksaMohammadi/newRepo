const path = require('path')
const express = require('express')

const port = process.env.PORT || 4000;
const way = path.join(__dirname+'/../public')
var app = express();
console.log(__dirname+"/../public")
app.use(express.static(way))
// app.get('/',(req,res)=>{
// 	res.send(index.html)
// })
app.listen(port,()=>{
	console.log('yeah...done')
})



// var way = path.join(__dirname+'/../public')
// console.log(__dirname+"/../public")
// console.log(way)

