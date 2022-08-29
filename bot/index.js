const io = require("socket.io-client")

const options =  { query: { token: "707277cf-29e7-4feb-ad15-1ce054e74299" } }
const clientSocket = io.connect("http://localhost:3000", options)

const venom = require('venom-bot');

venom
  .create({
    session: 'session-name', //name of session
    multidevice: true // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.isGroupMsg === false) {
      clientSocket.emit("message", {
        from: message.from,
        text: message.text,
        timestamp: message.timestamp
      })
    }
  });
}