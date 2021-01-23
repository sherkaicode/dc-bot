const Discord = require('discord.js');

const mong = require('mongoose');

var client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

const prefix = '!rtk ';

const fs = require('fs');
client.msgs = require("./Database/msgs.json");

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
    if (message.content.startsWith("write")) {
        editmsgs = message.content.slice(6);

        client.msgs[message.author.username] = {
            message: editmsgs
        }
        fs.writeFile("./Database/msgs.json", JSON.stringify(client.msgs, null, 4), err => {
            if (err) throw err;
        })
    }

    if (message.content.startsWith("get")) {
        let _message = client.msgs[message.author.username].message;
        message.channel.send("Swag message:" + _message);
    }
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLocaleLowerCase();

    switch (command) {
        case 'clear': {
            client.commands.get('clear').execute(message, args);
            break;
        }
        case 'ping': {
            client.commands.get('ping').execute(message, args);
            break;
        }
        case 'one' || '1' || '一': {
            client.commands.get('one').execute(message, args, Discord, client, fs);
            break;
        }

    }

});





client.login('Nzk1MTYxNjYwMDUwNTA1ODAw.X_FWAQ._DyPqieWVNlSFwnY-NSRrAXCRRY');