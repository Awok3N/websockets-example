const net = require("net");

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log(data.toString());
    });

    socket.write("Hello! this is server speaking");
    socket.end("Server: Closing connection now!");
}).on('error', (err) => {
    console.error(err);
});

server.listen('9898', () => {
    console.log("Server is listening at port ", server.address().port);
});