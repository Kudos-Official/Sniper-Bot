module.exports = ({
name:"jokeoverhead",
bot_perms:"Embed Links",
user_perms:"None",
description:"Have a joke over head meme! \"{prefix}jokeoverhead [user]\". Eg \"{prefix}jokeoverhead\"",
category:"Fun",
code:`$image[$splittext[1]]
$textsplit[$get[i];?size]
$let[i;https://api.popcatdev.repl.co/jokeoverhead?image=$replaceText[$replacetext[$useravatar[$findmember[$message]];gif;webp];.webp;.png]]
$color[RANDOM]
$addTimeStamp
$footer[Requested By $username;$authorAvatar]
$cooldown[5s;$getvar[emoji_fail] Damn, chill and take a sip of beer for **%time%**]`})