const socket = require("socket.io-client")

const options =  { query: { token: "aaa707277cf-29e7-4feb-ad15-1ce054e74299" } }
const client = socket.connect("http://localhost:3000", options)

client.on("message", (message) => {
    console.log(message)
})

client.on('connect_error', err => console.log(err))
client.on('connect_failed', err => console.log(err))
client.on('disconnect', err => console.log(err))
