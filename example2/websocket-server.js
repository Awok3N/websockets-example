const http = require("http");
const websocketServer = require("websocket").server;
const server = http.createServer();
server.listen(9898);

const wsServer = new websocketServer({
    httpServer: server
});

wsServer.on('request', function (request) {
    const connection = request.accept(null, request.origin);

    connection.on('message', function (message) {
        console.log("Received message", message.utf8Data);
        connection.sendUTF("Hi! this is websocket server");
    });
    connection.on('close', function (resasoncode, description) {
        console.log("connection has disconnected");
    });
});