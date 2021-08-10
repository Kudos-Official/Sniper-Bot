module.exports = [{
name: "avatar",
aliases: ['av'],
category:"Fun",
description:"Get any user's avatar.",
bot_perms:"Embed Links",
user_perms:"None",
code:`$if[$findMembers[$message;10;{position}]!=1]
$author[$userTag[$authorID];$authorAvatar]
$description[Please choose any number from the following:
$findMembers[$message;10;[**{position})** {tag}](https://www.youtube.com/watch?v=xfr64zoBTAQ)]]
$color[RANDOM]
$awaitMessages[$authorID;1m;everything;avatar;$getVar[emoji_fail] Cancelled]
$setUserVar[userav;$findMembers[$message;10;{id}]]
$elseIf[$findMembers[$message;10;{position}]==1]
$author[$userTag[$get[id]];$userAvatar[$get[id]]]
$description[[PNG]($replaceText[$useravatar[$get[user]];webp;png]) | [WEBP]($replaceText[$useravatar[$get[user]];png;webp]) | [JPEG]($replaceText[$replaceText[$useravatar[$get[user]];webp;jpeg];png;jpeg])]
$footer[Requested by $usertag;$authoravatar]
$image[$userAvatar[$get[id]?size=2048]]
$color[RANDOM]
$addTimestamp
$let[id;$findMembers[$message;10;{id}]]
$endElseIf
$endIf
$onlyIf[$message!=;{author:$userTag[$authorID]:$authorAvatar}{image:$userAvatar[$authorID?size=2048]}{description:[PNG]($replaceText[$useravatar[$get[user]];webp;png]) | [WEBP]($replaceText[$useravatar[$get[user]];png;webp]) | [JPEG]($replaceText[$replaceText[$useravatar[$get[user]];webp;jpeg];png;jpeg])}{color:RANDOM}{timestamp}{footer:Requested by $usertag:$authoravatar}]
$onlyIf[$findMembers[$message;10;{id}]!=;{description:[PNG]($replaceText[$useravatar[$get[user]];webp;png]) | [WEBP]($replaceText[$useravatar[$get[user]];png;webp]) | [JPEG]($replaceText[$replaceText[$useravatar[$get[user]];webp;jpeg];png;jpeg])}{author:$userTag[$findUser[$message]]:$userAvatar[$findUser[$message]]}{image:$userAvatar[$findUser[$message]?size=2048]}{color:RANDOM}{timestamp}]
`,
}, {
    type: "awaitedCommand",
    name: "avatar",
    code: `
$if[$isNumber[$message[1]]==true]
$author[$userTag[$splitText[$message[1]]];$userAvatar[$splitText[$message[1]]]]
$description[[PNG]($replaceText[$useravatar[$get[user]];webp;png]) | [WEBP]($replaceText[$useravatar[$get[user]];png;webp]) | [JPEG]($replaceText[$replaceText[$useravatar[$get[user]];webp;jpeg];png;jpeg])]
$footer[Requested by $usertag;$authoravatar]
$image[$userAvatar[$splitText[$message[1]]?size=2048]]
$color[RANDOM]
$addTimestamp
$textSplit[$getUserVar[userav];\n]
$elseIf[$toLowercase[$message[1]]==cancel]
$getVar[no] Cancelled
$endElseIf
$else
$author[$userTag[$authorID];$authorAvatar]
$description[[PNG]($replaceText[$useravatar[$get[user]];webp;png]) | [WEBP]($replaceText[$useravatar[$get[user]];png;webp]) | [JPEG]($replaceText[$replaceText[$useravatar[$get[user]];webp;jpeg];png;jpeg])]
$footer[Requested by $usertag;$authoravatar]
$image[$userAvatar[$authorID?size=2048]]
$color[RANDOM]
$addTimestamp
$endIf
$suppressErrors[$getVar[emoji_fail] Cancelled]`}]