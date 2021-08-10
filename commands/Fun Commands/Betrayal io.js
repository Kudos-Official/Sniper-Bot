module.exports = ({
name:"betrayal", 
category:"Fun",
bot_perms:"None",
user_perms:"None",
description:"Play a game of betrayal.io! Gonna be fun, ain't it?",
code:`$if[$voiceid!=]
$djseval[const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'betrayal').then(async invite => {
 return message.channel.send(invite.code);
 });]
$elseif[$channelexists[$findchannel[$message;no]]==true]
$djseval[const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$findchannel[$message;no]', 'betrayal').then(async invite => {
 return message.channel.send(invite.code);
 });]
$onlyif[$channeltype[$findchannel[$message;no]]==voice;Thats not a voice channel!]
$endelseif
$else 
Join a vc or mention/enter the ID of/name the channel you want to have the betrayal gane in!
$endif`})