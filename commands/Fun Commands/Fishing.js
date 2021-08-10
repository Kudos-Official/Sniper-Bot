module.exports = ({
name:"fishing", 
category:"Fun",
bot_perms:"None",
aliases:"fish",
user_perms:"None",
description:"Play a game of fishington.io!",
code:`$if[$voiceid!=]
$djseval[const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'fishing').then(async invite => {
 return message.channel.send(invite.code);
 });]
$elseif[$channelexists[$findchannel[$message;no]]==true]
$djseval[const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$findchannel[$message;no]', 'fishing').then(async invite => {
 return message.channel.send(invite.code);
 });]
$onlyif[$channeltype[$findchannel[$message;no]]==voice;That aint a voice channel!]
$endelseif
$else 
Join a vc or mention/enter the ID of/name the channel you want to have the fishing gane in!
$endif`})