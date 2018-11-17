const path = require('path')
const express = require('express')
const socketIO = require('socket.io')
const http = require('http')

const port = process.env.PORT || 4000;
const way = path.join(__dirname+'/../public')
var app = express();
console.log(__dirname+"/../public")
app.use(express.static(way))
const server = http.createServer(app)
const io = socketIO(server)

io.on('connection',(sock)=>{
	console.log('new joinee ...welocome')

	// sock.on('connect',()=>{
	// 	console.log('user is connected')
	// })
	sock.on('disconnect',()=>{
		console.log('bye to disconnected')
	})
})
// app.get('/',(req,res)=>{
// 	res.send(index.html)
// })
server.listen(port,()=>{
	console.log('yeah...done')
})



// var way = path.join(__dirname+'/../public')
// console.log(__dirname+"/../public")
// console.log(way)

