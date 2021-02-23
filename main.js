const Discord = require('discord.js');

var client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

const prefix = '!rtk ';

const fs = require('fs');

client.msgs1 = require("./Database/1.json");
client.msgs2 = require("./Database/2.json");
client.msgs3 = require("./Database/3.json");
client.msgs4 = require("./Database/4.json");
client.msgs5 = require("./Database/5.json");
client.msgs6 = require("./Database/6.json");
client.msgs7 = require("./Database/7.json");
client.msgs8 = require("./Database/8.json");
client.msgs9 = require("./Database/9.json");
client.msgs10 = require("./Database/10.json");
client.msgs11 = require("./Database/11.json");
client.msgs12 = require("./Database/12.json");
client.msgs13 = require("./Database/13.json");
client.msgs14 = require("./Database/14.json");
client.msgs15 = require("./Database/15.json");


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Kanji is online!');
});

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if (command == 'clear') {
        client.commands.get('clear').execute(message, args);
    }
    else if (command == 'ping') {
        client.commands.get('ping').execute(message, args);
    }
    else if (command == 'help') {
        message.author.send("All the Commands");
        message.author.send('Prefix is **!rtk**')
        for (const file of commandFiles) {
            const command = require(`./commands/${file}`);

            switch (command.name) {
                case '1': {
                    message.author.send("1 || 一 || one")
                    break;
                }
                case '2': {
                    message.author.send("2 || 二 || two")
                    break;
                }
                case '3': {
                    message.author.send("3 || 三 || three")
                    break;
                }
                case '4': {
                    message.author.send("4 || 四 || four")
                    break;
                }
                case '5': {
                    message.author.send("5 || 五 || five")
                    break;
                }
                case '6': {
                    message.author.send("6 || 六 || six")
                    break;
                }case '7': {
                    message.author.send("7 || 七 || seven")
                    break;
                }
                case '8': {
                    message.author.send("8 || 八 || eight")
                    break;
                }
                case '9': {
                    message.author.send("9 || 九 || nine")
                    break;
                }
                case '10': {
                    message.author.send("10 || 十 || ten")
                    break;
                }
                case '11': {
                    message.author.send("11 || 口 || mouth")
                    break;
                }
                case '12': {
                    message.author.send("12 || 日 || day")
                    break;
                }
                case '13': {
                    message.author.send("13 || 月 || month")
                    break;
                }
                case '14': {
                    message.author.send("14 || 田 || rich field")
                    break;
                }
                case '15': {
                    message.author.send("15 || 目 || eye")
                    break;
                }
                case 'les1' : {
                    message.author.send("lesson1")
                    break;
                }

            }
        }
    }
    else if (command == 'lesson1') {
        client.commands.get('les1').execute(message, args, Discord, client, fs);
    }
    else if (command == 'one' || command == '1' || command == '一') {
        client.commands.get('1').execute(message, args, Discord, client, fs);
    }
    else if (command == 'two' || command == '2' || command == '二') {
        client.commands.get('2').execute(message, args, Discord, client, fs);
    }
    else if (command == 'three' || command == '3' || command == '三') {
        client.commands.get('3').execute(message, args, Discord, client, fs);
    }
    else if (command == 'four' || command == '4' || command == '四') {
        client.commands.get('4').execute(message, args, Discord, client, fs);
    }
    else if (command == 'five' || command == '5' || command == '五') {
        client.commands.get('5').execute(message, args, Discord, client, fs);
    }
    else if (command == 'six' || command == '6' || command == '六') {
        client.commands.get('6').execute(message, args, Discord, client, fs);
    }
    else if (command == 'seven' || command == '7' || command == '七') {
        client.commands.get('7').execute(message, args, Discord, client, fs);
    }
    else if (command == 'eight' || command == '8' || command == '八') {
        client.commands.get('8').execute(message, args, Discord, client, fs);
    }
    else if (command == 'nine' || command == '9' || command == '九') {
        client.commands.get('9').execute(message, args, Discord, client, fs);
    }
    else if (command == 'ten' || command == '10' || command == '十') {
        client.commands.get('10').execute(message, args, Discord, client, fs);
    }
    else if (command == 'mouth' || command == '11' || command == '口') {
        client.commands.get('11').execute(message, args, Discord, client, fs);
    }
    else if (command == 'day' || command == '12' || command == '日') {
        client.commands.get('12').execute(message, args, Discord, client, fs);
    }
    else if (command == 'month' || command == '13' || command == '月') {
        client.commands.get('13').execute(message, args, Discord, client, fs);
    }
    else if (command == 'rice field' || command == '14' || command == '田') {
        client.commands.get('14').execute(message, args, Discord, client, fs);
    }
    else if (command == 'eye' || command == '15' || command == '目') {
        client.commands.get('15').execute(message, args, Discord, client, fs);
    }
    else {
        message.channel.send("Type **!rtk help**");
    }


});





client.login('Nzk1MTYxNjYwMDUwNTA1ODAw.X_FWAQ._DyPqieWVNlSFwnY-NSRrAXCRRY');