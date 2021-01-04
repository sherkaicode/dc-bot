module.exports = {
    name: 'push',
    description: "Number of Pushup today!",
    execute(message, args){
        var today = new Date();
        var dd = (today.getDate());
        var mm = (today.getMonth() + 1); //January is 0!
        var num = 10 + mm*(dd);

        message.channel.send(num);

    }
}