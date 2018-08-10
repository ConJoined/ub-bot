exports.run = (client, message, args) => {
    const result = new Discord.RichEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Unity Builders Bot", client.user.displayAvatarURL)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("#cc66ff")
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("Requested by: " + message.author.tag, message.author.displayAvatarURL)
  /* .setThumbnail(client.user.displayAvatarURL) */
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp();
​
  message.channel.send({embed: result});
}
