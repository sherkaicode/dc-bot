module.exports = {
    name: 'rr',
    description: "this is a ping command!",
    async execute(message, args, Discord, client){
        const channel = '796007208889483296'
        const yellow = message.guild.roles.cache.find(role => role.name === "Yellow");
        const red = message.guild.roles.cache.find(role => role.name === "Mod");
        
        const custom = '<:ArcReactorV1:787863288624840704>';
        const emoj = '💯';

        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Pick emoj')
        .setDescription('Choose \n' 
        + `${custom} for my man \n`
        + `${emoj} for my woman`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(custom);
        messageEmbed.react(emoj);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.message.fetch();
            if (user.bot) return;
            if(!reaction.message.guild)return;

            if (reaction.message.channel.id = channel) {
                if (reaction.emoji.name === emoj) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellow);
                }
                if (reaction.emoji.name === "ArcReactorV1") {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(red);
                }
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.message.fetch();
            if (user.bot) return;
            if(!reaction.message.guild)return;

            if (reaction.message.channel.id = channel) {
                if (reaction.emoji.name === emoj) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellow);
                }
                if (reaction.emoji.name === "ArcReactorV1") {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(red);
                }
            } else {
                return;
            }
        });
        
    }
}