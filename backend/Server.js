const express = require('express');
const app = express();

const server = require('http').createServer(app);
const { Server } = require('socket.io');

const io = new Server(server);

//routes
app.get("/",(req, res) => {
    res.send(
        "This is mern realtime whiteboard sharing app offcial server by dhanuka"
    );
});

io.on("connection",(socket)=>{
    console.log("user connected");
})


const port = process.env.PORT || 5000;
server.listen(port,()=>console.log(`server is listening on port`,port));