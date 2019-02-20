var io = require('socket.io')(process.env.PORT||5000);

var playerCount = 0;

console.log("Server Running");

io.on('connection',function(socket){
    console.log("Connected to Unity");

    socket.broadcast.emit('spawn');
    playerCount++;

    for(var i = 0; i<playerCount; i++){
        socket.emit('spawn');
        console.log('Sending spayn to new ');
    }

    socket.on('sayhello', function(data){
        console.log("Unity Game says hello");
        socket.emit('talkback');
    });

    socket.on('disconnect', function(){
        console.log("Player Disconnected");
        playerCount--;
    } );
})