const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io/lib')(server);
const uuid = require('uuid/v4');

server.listen(process.env.PORT || 8080);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

const queue = [];

io.on('connection', function (socket) {
    id = socket.id;
    console.log(id + ' has joined');
    
    socket.on('findOpponent', _ => {
        let opponentId, roomId, roomSocket;
        if(queue.length > 0){
            opponentId = queue.shift();
            opponentSocket = io.sockets.sockets[opponentId];
            
            roomId = uuid();
            
            socket.join(roomId);
            opponentSocket.join(roomId);

            roomSocket = io.sockets.to(roomId);

            roomSocket.on('nextFrame', (data) => {
                console.log('nextFrame', data);
                roomSocket.emit('nextFrame-broad', data);
            });

            roomSocket.on('finished', (data) => {
                let winner = data.id;
                console.log('Finished', clients);

                roomSocket.clients((err , clients) => {
                    console.log('Removing', clients);
                    let loserId = clients.filter(client_id => client_id !== winner)[0];

                    roomSocket.to(loserId).emit('lost');
                    roomSocket.to(winner).emit('won');
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
        queue.pop(queue.indexOf(id));
    });
});