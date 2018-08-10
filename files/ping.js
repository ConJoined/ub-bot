exports.run = (client, message, args) => {
    const result = new Discord.RichEmbed()
  .setTitle("Pong!")
  .setAuthor("Unity Builders Bot", client.user.displayAvatarURL)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("#cc66ff")
  .setDescription("The ping is " + client.ping + "ms.")
  .setFooter("Requested by: " + message.author.tag, message.author.displayAvatarURL)
  /* .setThumbnail(client.user.displayAvatarURL) */
  /*
   * Takes a Date object, defaults to current date.
   */
    .setImage("https://i.imgur.com/zO5aYA7.png")
    
    
  .setTimestamp();
​
  message.channel.send({embed: result});
}
