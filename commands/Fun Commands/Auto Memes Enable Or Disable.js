module.exports = ({
name:"auto-meme",
bot_perms:"Embed Links",
user_perms:"Manage Server",
category:"Fun",
description:"Post auto memes to the channel this is executed in, once every 30 seconds!",
code:`$if[$getservervar[fun_automeme]==false]
$loop[999999999999999;automeme]
$sendmessage[Started auto memes, which post every 30 seconds! 
*Starts in 30 seconds from now, use this command again to disable*;no]
$setservervar[fun_automeme;true]
$else
$sendmessage[Successfully stopped auto-memes!;no]
$setservervar[fun_automeme;false]
$endif
$onlyperms[manageserver;$getvar[emoji_fail] You need the manage server permissions!]
$onlyif[$isbot[$authorid]==false;]`})