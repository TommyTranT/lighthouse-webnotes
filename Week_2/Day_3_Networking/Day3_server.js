// Refer to this site for ports
// https://nodejs.org/api/net.html

// Waiter ?

// Attend everyone
// Speed (dont have to wait)
// Accuracy
// Polite

// Someone -> Give them instructions -> Good waiter

// Fast & Accurate : JavaScript
// Give instructions : if somebody asks for something then do something
// Good server

// Waiting for the user <- Event listener
// User type something <- Event is emitted
// In the event of the user typing something <- Callback of the event listener
// Do something in return <- Callback of the event listener

// Readline -> Read the line of the terminal
// Net ->

const net = require("net");

// Object or an array
const clientList = [];

const goodServerInstructions = (client) => {
  const parrot = (message) => {
    client.write(`🦜: ${message}`);
  };
  // console.log(client);
  const broadcast = (message) => {
    // console.log(message, typeof message);
    console.log("received message: ", message);
    for (const recipient of clientList) {
      if (recipient !== client) {
        recipient.write(`📣: ${message.toUpperCase()}`); //<== / client: hello | server: 📣 : HELLO
      }
    }
  };
  // connection => client
  // client speaks utf-8
  client.setEncoding("utf-8");

  // Add client to the list when the callback is triggered
  clientList.push(client);

  // Say hi to client
  client.write("Hello!");

  // Log the client that came in
  console.log("Client came in at:", new Date().toLocaleTimeString());
  console.log(`There is currently ${clientList.length} clients connected`);

  // Handle client message
  client.on("data", broadcast); // You know the client ? If you receive data from date, run parrot
  // client.on("data", (data) => {
  //   client.write("To in or to out ?");
  // });
};

const server = net.createServer(goodServerInstructions);

server.listen(9001, () => {
  console.log("Server is ready!");
});