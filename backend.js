const http = require("http")
const express = require("express")

const app = express()
const server = http.createServer(app)
app.use(express.static("index"))
const {Server, Namespace} = require("socket.io")

const io = new Server(server)
io.on("connection", (socket) => {
    socket.on("message", (texts) => {        
        io.emit("message", texts)
        console.log(texts)
    })
    socket.on("thename", (myname) => {
        io.emit("thename", myname)
        
    })
    socket.on("thegrades", (grades) => {
        io.emit("thegrades", grades)
    })
    
    
})
const PORT = process.env.PORT || 5041;

server.listen(PORT, () => {
    console.log(`The server's live on port ${PORT}!`);
});