module.exports = ({
name:"dadjokes",
bot_perms:"None",
user_perms:"Manage Server",
category:"Fun",
description:"Dadjokes, enable so that whenever someone's statements start with im or i'm, it will say \"\Hi <text after im>, im $username[$clientid]!\", and if anyone is mentioned, the bot will disable those mentions!",
code:`$if[$tolowercase[$message[1]]==enable]
$setservervar[fun_dadjokes;true]
$getvar[emoji_success] I successfully **enabled** dadjokes! 
$elseif[$tolowercase[$message[1]]==disable]
$setservervar[fun_dadjokes;false]
$getvar[emoji_success] I successfully **disabled** dadjokes!
$endelseif
$else
$getvar[emoji_fail] You can only **enable** or **disable** dadjokes!
$endif
$onlyperms[manageserver;$getvar[emoji_fail] You need the manage server permissions!]
$onlyif[$isbot[$authorid]==false;]`})