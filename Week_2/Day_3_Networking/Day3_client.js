const net = require("net");
const readline = require("readline"); // <== Creates a system to allow input from user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const options = { // <== For joining a server.
  port: 9001, // <== server port
  host: "localhost", // <== localhost is our own computer in this example
};

const connection = net.createConnection(options, () => { // <= creating a new connection to client
  console.log("Succesfully connected");

  connection.setEncoding("utf-8");

  // setInterval(() => {
  //   connection.write("Yo yo yo.");  // <== Says yoyoyo to the server. 
  // }, 1000);
  rl.on("line", (line) => {
    // console.log(`Received: ${line}`);
    connection.write(line); // <== localhost is our own computer  in this example
  });
});

connection.on("data", (data) => console.log(data));

// Send a custom message

// Send to server with connection.write
// Stdin? Standard Input ?
// Readline