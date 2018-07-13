const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io/lib')(server);
const uuid = require('uuid/v4');

server.listen(process.env.PORT || 8080);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

const queue = [];
const rooms = {};

io.on('connection', function (socket) {
    let roomId;
    id = socket.id;
    console.log(id + ' has joined');
    
    socket.on('findOpponent', _ => {
        let opponentId, roomId, roomSocket;
        if(queue.length > 0){
            opponentId = queue.shift();
            opponentSocket = io.sockets.sockets[opponentId];

            let room = [socket, opponentSocket];

            roomId = uuid();

            rooms[roomId] = room;

            socket.roomId = roomId;
            opponentSocket.roomId = roomId;

            room.forEach((socket, index) => {
                let opponent = (index + 1) % 2;
                let playerSocket = socket, opponentSocket = room[opponent];

                socket.on('nextFrame', (data)=>{
                    io.sockets.to(opponentSocket.id).emit('nextFrame', data);
                });

                socket.on('finished', _ => {
                    console.log('Finished');
                    io.sockets.to(opponentSocket.id).emit('lost');
                    io.sockets.to(playerSocket.id).emit('won');

                    opponentSocket.roomId = undefined;
                    playerSocket.roomId = undefined;

                    opponentSocket.disconnect();
                    playerSocket.disconnect();

                    delete rooms[roomId];
                });
            });

            socket.emit('foundOpponent', {
                yourId: socket.id,
                roomId,
                opponentId: opponentId
            });

            opponentSocket.emit('foundOpponent', {
                yourId: opponentId,
                roomId,
                opponentId: socket.id,
            });
        } else {
            queue.push(socket.id);
        }
    });
    
    socket.on('disconnect', function (data) {
        console.log(id + ' has disconnected');

        let indexInQueue = queue.indexOf(id);
        if (indexInQueue !== -1){
            queue.pop(queue.indexOf(id));
        }

        let roomId = socket.roomId;

        if(roomId !== undefined){
            console.log(rooms);
            room = rooms[roomId];
            room.forEach((socketInRoom)=>{
                if(socketInRoom.id !== socket.id){
                    socketInRoom.emit('won');
                    socketInRoom.roomId = undefined;
                }
            });
        }

        delete rooms[roomId];
    });
});