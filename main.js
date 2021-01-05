const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () =>{
    console.log('Kanji is online!');
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLocaleLowerCase();

    if (command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
    else if (command == 'youtube'){
        client.commands.get('youtube').execute(message, args);
    }
    else if (command == 'push'){
        client.commands.get('push').execute(message, args);
    }
    else if (command == 'embed'){
        client.commands.get('embed').execute(message, args, Discord);
    }
    else if (command == 'clear'){
        client.commands.get('clear').execute(message, args);
    }
    else if (command == 'rr'){
       client.commands.get('rr').execute(message, args, Discord, client);
    }


});


client.login('Nzk1MTYxNjYwMDUwNTA1ODAw.X_FWAQ._DyPqieWVNlSFwnY-NSRrAXCRRY');