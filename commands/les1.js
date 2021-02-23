module.exports = {
    name: 'les1',
    description: "Kanji",
    execute(message, args, Discord, client, fs) {

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('LESSON 1')
            .setURL('https://discord.com/channels/790447283921616916/790538687657279498')
            .setDescription('The Topics for Lesson 1')
            .addFields(
                { name: '1', value: '一' , inline : true},
                { name: '6', value: '六' , inline: true },
                { name: '11', value: '口', inline: true },
                { name: '2', value: '二', inline: true },
                { name: '7', value: '七', inline:true },
                { name: '12', value: '日' , inline: true},
                { name: '3', value: '三'  , inline: true},
                { name: '8', value: '八', inline: true },
                { name: '13', value: '月' , inline: true},
                { name: '4', value: '四' , inline: true},
                { name: '9', value: '九' , inline: true},
                { name: '14', value: '田', inline: true },
                { name: '5', value: '五' , inline: true},
                { name: '10', value: '十' , inline : true},
                { name: '15', value: '目' , inline: true},
            )
            .setFooter('Click the Title to go to the Channel')

        message.channel.send(embed);
        console.log("swag")
    }
}