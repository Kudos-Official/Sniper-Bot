module.exports = ({
name:"message-tracker",
bot_perms:"Embed Links",
user_perms:"Manage Server",
category:"Utility",
description:"Enable the message tracker. It tracks messages sent from a user and can later be seen as a leaderboard. You can also have a message-lb-editor which will on every message(with a cooldown of 5 seconds to prevent rate limits) edit that message and show the top 10 on the leaderboard. Example setup: \"$getservervar[prefix]message-tracker <disable>/<enable> <lb editor enabled(yes/no), if yes then the channel for the editor>\", like \"$getservervar[prefix]message-tracker enable yes #leaderboard\" to enable message tracker with message editor.",
code:`$if[$tolowercase[$message[1]]==disable]
$getvar[emoji_success] Successfully performed, message tracker is now **disabled**!
$setservervar[mt_enabled;false]
$setservervar[mt_editor;]
$setservervar[mt_ceditor;]
$elseif[$tolowercase[$message[1]]==enable]
$if[$tolowercase[$message[2]]==yes]
$getvar[emoji_success] Successfully performed, and the message tracker is now available in <#$get[c]>!
$setservervar[mt_editor;$splittext[1]]
$setservervar[mt_ceditor;$get[c]]
$setservervar[mt_enabled;true]
$textsplit[$channelsendmessage[$get[c];{author:Message Leaderboard Of $servername:$servericon}{description:No messages tracked since the time the tracker was enabled!}{color:RANDOM}{footer:Enabled at}{timestamp};yes]; ]
$textsplit[$parsedate[$datestamp];,]
$onlyif[$isvalidlink[$servericon]==true;Upload a server icon first!]
$onlyif[$serverchannelexists[$get[c]]==true;That channel for the message tracker was not found!]
$let[c;$findchannel[$message[3];no]]
$else
$setservervar[mt_enabled;true]
$getvar[emoji_success] Successfully performed, use **$getservervar[prefix]message-lb [Page Number]** to see the leaderboard!
$endif
$endelseif
$else
You can only enable or disable the message leaderboard!
$endif
$onlyperms[manageserver;$getvar[emoji_fail] You do not have the Manage Server permissions!]`})