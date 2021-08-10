const Aoijs = require("aoi.js");
const discord = require("discord.js");
const bot = new Aoijs.Bot({
    token:"ODczMTcxNDY2ODI3NDc3MDQz.YQ0iTA.U-1O1Eg3ei7p1YItUBzhEjGWgoM",
    prefix:['$username[$clientid]','$getservervar[prefix]'],
})
bot.onMessage();
const buttons = require('discord-buttons')
buttons(bot.client)
bot.status({
  text: " your edited and sneaky lil' deleted messages",
  type: "WATCHING",
  time: 12
})
bot.loadCommands(`./commands/`)
bot.variables({
  prefix:"s!",
  invite:"https://discord.com/api/oauth2/authorize?client_id=873171466827477043&permissions=8&scope=bot",
  //Emojis
  emoji_success:"<a:verified:870140836531290114>",
  emoji_loading:"<a:loading:870138435451617300>",
  emoji_fail:"<:xmark:870526274026754119>",
  //Snipe
  snipe_count:"0",
  snipe_page:"0",
  snipe_type:"",
  snipe_mchannel:"",
  snipe_channel:"",
  snipe_message:"",
  snipe_author:"",
  snipe_time:"",
  snipe_image:"",
  //Esnipe
  esnipe_count:"0",
  esnipe_page:"0",
  esnipe_type:"",
  esnipe_mchannel:"",
  esnipe_channel:"",
  esnipe_message:"",
  esnipe_omessage:"",
  esnipe_link:"",
  esnipe_author:"",
  esnipe_time:"",
  esnipe_image:"",
  //Message Tracker
  mt_enabled:"false",
  mt_editor:"",
  mt_ceditor:"",
  mtmessages:"0",
  mt_page:"0",
  //Fun
  fun_automeme:"false",
  fun_f:"0",
  fun_dadjokes:"false",
  userav:"" 
})
bot.deletedCommand({
channel:"$channelID",
code:`$setchannelvar[snipe_count;$sum[$getchannelvar[snipe_count];1]]
$setchannelvar[snipe_image;$messageattachmentᾟ$getchannelvar[snipe_image]]
$setchannelvar[snipe_author;$authoridᾟ$getchannelvar[snipe_author]]
$setchannelvar[snipe_time;$datestampᾟ$getchannelvar[snipe_time]]
$setchannelvar[snipe_message;$replacetext[$message;ᾟ;H]ᾟ$getchannelvar[snipe_message]]
$setservervar[snipe_count;$sum[$getservervar[snipe_count];1]]
$setservervar[snipe_message;$replacetext[$message;ᾟ;H]ᾟ$getservervar[snipe_message]]
$setservervar[snipe_image;$messageattachmentᾟ$getservervar[snipe_image]]
$setservervar[snipe_author;$authoridᾟ$getservervar[snipe_author]]
$setservervar[snipe_time;$datestampᾟ$getservervar[snipe_time]]
$setservervar[snipe_mchannel;$channelidᾟ$getservervar[snipe_mchannel]]
$onlyif[$message!=;]
$onlyif[$partial!=true;{execute:cache}]`})
bot.onMessageDelete()
bot.awaitedCommand({
name:"cache",
code:`$cachemembers`})
bot.updateCommand({
channel:"$channelID",
code:`$setchannelvar[esnipe_count;$sum[$getchannelvar[esnipe_count];1]]
$setchannelvar[esnipe_image;$messageattachmentᾟ$getchannelvar[esnipe_image]]
$setchannelvar[esnipe_author;$authoridᾟ$getchannelvar[esnipe_author]]
$setchannelvar[esnipe_time;$datestampᾟ$getchannelvar[esnipe_time]]
$setchannelvar[esnipe_omessage;$replacetext[$oldmessage;ᾟ;H]ᾟ$getchannelvar[esnipe_omessage]]
$setchannelvar[esnipe_message;$replacetext[$message;ᾟ;H]ᾟ$getchannelvar[esnipe_message]]
$setchannelvar[esnipe_link;https://discord.com/channels/$guildid/$channelid/$messageidᾟ$getchannelvar[esnipe_link]]
$setservervar[esnipe_count;$sum[$getservervar[esnipe_count];1]]
$setservervar[esnipe_omessage;$replacetext[$oldmessage;ᾟ;H]ᾟ$getservervar[esnipe_omessage]]
$setservervar[esnipe_message;$replacetext[$message;ᾟ;H]ᾟ$getservervar[esnipe_message]]
$setservervar[esnipe_link;https://discord.com/channels/$guildid/$channelid/$messageidᾟ$getservervar[esnipe_link]]
$setservervar[esnipe_image;$messageattachmentᾟ$getservervar[esnipe_image]]
$setservervar[esnipe_author;$authoridᾟ$getservervar[esnipe_author]]
$setservervar[esnipe_time;$datestampᾟ$getservervar[esnipe_time]]
$setservervar[esnipe_mchannel;$channelidᾟ$getservervar[esnipe_mchannel]]
$onlyif[$message!=;]
$onlyif[$partial!=true;{execute:cache}]
$onlyif[$oldmessage!=$message;]`})
bot.onMessageUpdate()
bot.onInteractionCreate()
bot.interactionCommand({
name:"PressF",
prototype:"button",
code:`$setservervar[fun_f;$sum[$getservervar[fun_f];1]]
$interactionreply[**$usertag** literally paid $$random[1;100] worth of F 🧢;]`})
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('ok');
});
server.listen(3000);