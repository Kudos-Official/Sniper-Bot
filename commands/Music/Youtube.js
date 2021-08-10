module.exports = ({
name:"youtube", 
category:"Music",
aliases:['yt','watch'],
bot_perms:"None",
user_perms:"Speak",
description:"Watch youtube on discord!",
code:`$if[$voiceid!=]
$djseval[const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$voiceID', 'youtube').then(async invite => {
 return message.channel.send(invite.code);
 });]
$elseif[$channelexists[$findchannel[$message;no]]==true]
$djseval[const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);
client.discordTogether.createTogetherCode('$findchannel[$message;no]', 'youtube').then(async invite => {
 return message.channel.send(invite.code);
 });]
$onlyif[$channeltype[$findchannel[$message;no]]==voice;That aint a voice channel!]
$endelseif
$else 
Join a vc or mention/enter the ID of/name the channel you want to have the youtube together watch party in!
$endif`})