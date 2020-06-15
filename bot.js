var Discord = require('discord.io')
var auth = require('./auth.json')
var moment = require('moment')

var bot = new Discord.Client({
   token: auth.token,
   autorun: true
})

bot.on('ready', function (evt) {
    console.log('Connected')
    console.log('Logged in as: ')
    console.log(bot.username + ' - (' + bot.id + ')')
    
})

bot.on('guildMemberAdd', (member)=>{
    console.log(member, 'joined, sending message')
})

bot.on('message', (user, userID, channelID, message, evt)=>{
    var command = message.split(' ')
    console.log(user, userID, message, channelID, evt)
})

bot.on('disconnect', function(erMsg, code) {
    console.log('----- Bot disconnected from Discord with code', code, 'for reason:', erMsg, '-----');
    bot.connect();
})
