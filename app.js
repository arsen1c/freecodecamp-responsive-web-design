function myFunc() {
    cosole.log('This is my function')
}

var app = require('express')();
var http = require('http').createServer(app);
app.get('/', (req, res) => {
            res.send('
                Hello world ');
            }); http.listen(3000, () => {
            console.log('listening on *:3000');
        });



        io.on('connection', (socket) => {
            console.log('a user connected');
            socket.on('disconnect', () => {
                console.log('user disconnected');
            });
        });