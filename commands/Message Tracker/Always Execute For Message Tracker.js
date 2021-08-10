module.exports = ({
name:"$alwaysExecute",
code:`$if[$messageexists[$replacetext[$replacetext[$checkcondition[$getservervar[mt_ceditor]==];true;$channelid];false;$getservervar[mt_ceditor]];$getservervar[mt_editor]]==true]
$replacetext[$replacetext[$checkcondition[$random[1;3]==2];true;$editmessage[$getservervar[mt_editor];{author:Message Leaderboard Of $servername:$servericon}{description:$userLeaderboard[mtmessages;asc;\`{top}\`.- **{tag}** - {value} messages\n]}{color:RANDOM}{footer:Last Updated At}{timestamp};$getservervar[mt_ceditor]]];false;]
$setuservar[mtmessages;$sum[$getuservar[mtmessages];1]]
$else
$setuservar[mtmessages;$sum[$getuservar[mtmessages];1]]
$endif
$onlyif[$getservervar[mt_enabled]==true;]`})