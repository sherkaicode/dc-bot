module.exports = {
    name: 'one',
    description: "Kanji",
    async execute(message, args, Discord, client, fs) {

        let _message = client.msgs[message.author.username].message;
        const channel = '790480969919365130'

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

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(emoj);


        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.message.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id = channel) {

                if (reaction.emoji.name === emoj) {
                    const filter = m => {
                        return m.author.id === message.author.id;
                    }

                    message.channel.send('Input Story').then(() => {
                        message.channel.awaitMessages(filter, {
                            max: 1,
                            errors: ['max']
                        })
                            .then(message => {
                                message = message.first()
                                client.msgs[message.author.username] = {
                                    message: message.content
                                }
                                fs.writeFile("./Database/msgs.json", JSON.stringify(client.msgs, null, 4), err => {
                                    if (err) throw err;
                                    message.channel.send("logged");

                                });

                            })
                    })
                }


            }
            else {
                return;
            }
        });

    }
}