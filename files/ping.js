exports.run = (client, message, args) => {
    message.channel.send("Pong! Here's my total heartbeat: " + client.ping + "ms.").catch(console.error);
}
