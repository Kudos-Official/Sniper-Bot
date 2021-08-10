module.exports = [{
name:"mlbprevious",
type:"awaitedCommand",
code:`$editMessage[$message[1];{author:Message Leaderboard Of $servername:$servericon}{description:$get[lb]}{footer:Requested By $usertag | Use The Reactions To Toggle The Pages! | Page $get[page]:$authoravatar}{color:RANDOM}{timestamp};$channelID]
$setuservar[mt_page;$get[page]]
$let[lb;$userleaderboard[mtmessages;asc;\`{top}\`. **{username}** - {value} messages;10;$get[page]]]
$let[page;$replacetext[$replacetext[$checkcondition[$getuservar[mt_page]==1];true;1];false;$sub[$getuservar[mt_page];1]]]`}]