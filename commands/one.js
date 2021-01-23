module.exports = {
    name: 'one',
    description: "Kanji",
    execute(message, args, Discord, client, fs) {
        let _message = client.msgs[message.author.username].message;
        // const channel = '790480969919365130'
        var mes;

        const emoj = '❌';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('一')
            .setURL('https://jisho.org/search/%E4%B8%80%23kanji%27')
            .setDescription('[いち]')
            .setThumbnail('https://raw.githubusercontent.com/mistval/kanji_images/master/gifs/4e00.gif')
            .addFields(
                { name: 'English', value: 'one' },
                { name: 'Primitives', value: 'None' },
                { name: 'Story', value: _message },
            )
            .setFooter('React \n'
                + `${emoj} To edit Story`)


        message.react('👍').then(r => {
            message.react('👎');
        });
        message.channel.send(embed);

        message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
            { max: 1, time: 30000 }).then(collected => {
                if (collected.first().emoji.name == '👍') {
                    message.reply('Input Story').then(() => {
                        message.channel.awaitMessages(m => m.author.id == message.author.id,
                            { max: 1, time: 30000 }).then(collected => {
                                mes = collected.first().content
                                if (collected.first().content.toLowerCase()) {

                                    client.msgs[message.author.username] = {
                                        message: mes
                                    }
                                    fs.writeFile("./Database/msgs.json", JSON.stringify(client.msgs, null, 4), err => {
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