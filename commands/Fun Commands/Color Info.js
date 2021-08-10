module.exports = ({
name:"color",
aliases:"ci",
bot_perms:"Embed Links",
user_perms:"None",
description:"Get info in a specific color. Hex is needed. Eg: {prefix}ci FFFF returns info on the color cyan",
category:"Fun",
code:`$title[Info on the hex $message[1]]
$addfield[** **;** **;yes]
$addfield[Brightended Form Of The Hex(Color Of This Embed);$jsonrequest[https://api.popcatdev.repl.co/color/$get[hex];brightened];yes]
$addfield[RGB;$touppercase[$jsonrequest[https://api.popcatdev.repl.co/color/$get[hex];rgb]];yes]
$addfield[** **;** **;yes]
$addfield[Hex Code;$jsonrequest[https://api.popcatdev.repl.co/color/$get[hex];hex];yes]
$addfield[Name;$jsonrequest[https://api.popcatdev.repl.co/color/$get[hex];name];yes]
$color[$jsonrequest[https://api.popcatdev.repl.co/color/$get[hex];brightened]]
$image[$jsonrequest[https://api.popcatdev.repl.co/color/$get[hex];color_image]]
$footer[Requested by $usertag;$authoravatar]
$addtimestamp
$let[hex;$message[1]]
$onlyif[$isvalidhex[$message[1]]==true;$getvar[emoji_fail] Thats not a valid hex :eyes:]
$cooldown[$replacetext[$replacetext[$checkcondition[$isvalidhex[$message[1]]==true];true;1s];false;5s];$getvar[emoji_fail] Damn, chill and take a sip of beer for **%time%**]`})