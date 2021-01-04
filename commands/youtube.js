module.exports = {
    name: 'youtube',
    description: "yt link",
    execute(message, args){

        //if (message.member.roles.cache.has('795173061673746492')){
        if (message.member.roles.cache.some(r => r.name === "Mod")){    

            message.channel.send('https://jisho.org/search/%E4%B8%80%23kanji');
            
        } 
        else {
           message.channel.send('Error');
           message.member.roles.add('795173061673746492').catch(console.error);
        }
    }
}