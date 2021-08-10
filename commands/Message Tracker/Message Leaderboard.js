module.exports = ({
name:"message-lb",
aliases:"message-leaderboard",
bot_perms:"Embed Links",
user_perms:"None",
category:"Utility",
description:"Get the message leaderboard of the server. You can enter an optional page argument, and you also get reactions to toggle between the pages! Example: \"$getservervar[prefix]message-lb 1\" will show the first page of the message leaderboard.",
code:`$reactioncollector[$splittext[1];$authorID;5m;⬅️,➡️,🗑️;mlbprevious,mlbnext,mlbdelete;yes]
$textsplit[$sendmessage[{author:Message Leaderboard Of $servername:$servericon}{description:$get[lb]}{footer:Requested By $usertag | Use The Reactions To Toggle The Pages! | Page $get[page]:$authoravatar}{color:RANDOM}{timestamp};yes]; ]
$let[lb;$userleaderboard[mtmessages;asc;\`{top}\`. **{username}** - {value} messages;10;$get[page]]]
$setuservar[mt_page;$get[page]]
$let[page;$replacetext[$replacetext[$isnumber[$message[1]];false;1];true;$message[1]]]
$onlyif[$getservervar[mt_enabled]==true;$getvar[emoji_fail] Message tracker has not been enabled yet!]`})