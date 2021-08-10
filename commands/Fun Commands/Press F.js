module.exports = ({
name:"pressf",
aliases:"f",
bot_perms:"Embed Links",
user_perms:"None",
category:"Fun",
description:"Press F!",
code:`$deletemessage[$get[e]]
$setservervar[fun_f;0]
**$getservervar[fun_f]** users paid their respect, full cap :billed_cap:
$onlyif[$getservervar[fun_f]!=0;Your :regional_indicator_f: wasn't to :regional_indicator_f:ing, no one gave an :regional_indicator_f:]
$wait[30s]
$let[e;$apiMessage[$channelID;;{author:$usertag's Big F:}{field:PRESS F:$message:no}{footer:PRESS F OR U GONNA REGRET IT:}{color:FFFFFF};{actionRow:🇫,2,2,PressF};;yes]]
$setservervar[fun_f;0]
$onlyif[$message!=;$getvar[emoji_fail] What do u even wanna press F for my man, enter something!]`})