module.exports = {
    name: '15',
    description: "Kanji",
    async execute(message, args, Discord, client, fs) {
        let _message = client.msgs15[message.author.username].message;
        // const channel = '790480969919365130'
        var mes;

        const emoj = '❌';
        const emojd = '🍥';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('目')
            .setURL('https://jisho.org/search/%E7%9B%AE%23kanji')
            .setDescription('[め]')
            .setThumbnail('https://raw.githubusercontent.com/mistval/kanji_images/master/gifs/76ee.gif')
            .addFields(
                { name: 'English', value: 'Eye' },
                { name: 'Primitives', value: 'None' },
                { name: 'Story', value: _message },
            )
            .setFooter('React \n'
                + `${emoj} To edit Story \n`
                + `${emojd} To Cancel`)


        message.react(emoj).then(r => {
            message.react(emojd);
        });
        
        message.channel.send(embed);
        

        message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == emoj || reaction.emoji.name == emojd),
            { max: 1, time: 30000 }).then(collected => {
                if (collected.first().emoji.name == emoj) {
                    message.reply('Input Story').then(() => {
                        message.channel.awaitMessages(m => m.author.id == message.author.id,
                            { max: 1, time: 30000 }).then(collected => {
                                mes = collected.first().content
                                if (collected.first().content.toLowerCase()) {

                                    client.msgs15[message.author.username] = {
                                        message: mes
                                    }
                                    fs.writeFile("./Database/15.json", JSON.stringify(client.msgs15, null, 4), err => {
                                        if (err) throw err;
                                    })
                                    message.reply('Logged');
                                }

                                else
                                    message.reply('Operation canceled.');
                            })
                    })
                }
                else
                    message.reply('Operation canceled.');
            })


    }
}