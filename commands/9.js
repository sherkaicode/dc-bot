module.exports = {
    name: '9',
    description: "Kanji",
    async execute(message, args, Discord, client, fs) {
        let _message = client.msgs9[message.author.username].message;
        // const channel = '790480969919365130'
        var mes;

        const emoj = '❌';
        const emojd = '🍥';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('九')
            .setURL('https://jisho.org/search/%E4%B9%9D%23kanji')
            .setDescription('[きゅう]')
            .setThumbnail('https://raw.githubusercontent.com/mistval/kanji_images/master/gifs/4e5d.gif')
            .addFields(
                { name: 'English', value: 'Nine' },
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

                                    client.msgs9[message.author.username] = {
                                        message: mes
                                    }
                                    fs.writeFile("./Database/9.json", JSON.stringify(client.msgs9, null, 4), err => {
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