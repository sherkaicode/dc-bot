module.exports = {
    name: 'embed',
    description: "this is a ping command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Kanji')
        .setURL('https://youtube.com')
        .setDescription('Kanji(-)')
        .addFields(
            {name: 'Def', value: 'number'},
            {name: 'Def', value: 'swag'},
            {name: 'Def', value: 'arc'},
        )
        .setImage('https://raw.githubusercontent.com/mistval/kanji_images/master/gifs/8d64.gif')
        .setFooter('See you again');

        message.channel.send(newEmbed);
    }
}