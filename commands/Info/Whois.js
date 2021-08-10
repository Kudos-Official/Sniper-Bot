module.exports = [{
name:"whois",
aliases:['ui','user','userinfo'],
bot_perms:"Embed Links",
user_perms:"None",
category:"Info",
description:"Get some basic user information!",
code:`$if[$message==]
$reply[$messageid;:information_source: About ID: **$get[user]**{field:Mention:<@$get[user]>:yes}{field:Username:$username[$get[user]]:yes}{field:Nickname:$replacetext[$replacetext[$checkcondition[$username[$get[user]]==$nickname[$get[user]]];true;None];false;$nickname[$get[user]]]:yes}{field:Creation Date Of The Account:$creationdate[$get[user];date]($creationdate[$get[user];time] ago):yes}{field:Server Join Date:$memberjoineddate[$get[user];date]($memberjoineddate[$get[user];time] ago):yes}{field:Roles:$replacetext[$replacetext[$checkcondition[$findnumbers[$charcount[$userroles[$get[user];mentions;, ]]]>=1096];true;Too Many To Display In This Specific Embed];false;$replacetext[$replacetext[$checkcondition[$userroles[$get[user]]==];true;No Roles];false;$userroles[$get[user];mentions;, ]]]:yes}{field:Bot:$tolocaleuppercase[$isbot[$get[user]]]:yes}{field:Avatar URLs:[PNG]($replaceText[$useravatar[$get[user]];webp;png]) | [WEBP]($replaceText[$useravatar[$get[user]];png;webp]) | [JPEG]($replaceText[$replaceText[$useravatar[$get[user]];webp;jpeg];png;jpeg]):yes}{thumbnail:$useravatar[$get[user]]}{footer:Requested By $usertag:$authoravatar}{timestamp}{color:RANDOM};yes]
$let[user;$authorid]
$elseif[$checkcondition[$findMembers[$message;10;{position}]!=1]$checkcondition[$findMembers[$message;10;{position}]!=]==truetrue]
$author[$userTag[$authorID];$authorAvatar]
$description[Please choose any number from the following:
$findMembers[$message;10;[**{position})** {tag}](https://www.youtube.com/watch?v=xfr64zoBTAQ)]]
$color[BLUE]
$awaitMessages[$authorID;1m;everything;whois;$getVar[emoji_fail] Cancelled]
$setUserVar[userav;$findMembers[$message;10;{id}]]
$endelseif
$elseIf[$findMembers[$message;10;{position}]==1]
$reply[$messageid;:information_source: About ID: **$get[user]**{field:Mention:<@$get[user]>:yes}{field:Username:$username[$get[user]]:yes}{field:Nickname:$replacetext[$replacetext[$checkcondition[$username[$get[user]]==$nickname[$get[user]]];true;None];false;$nickname[$get[user]]]:yes}{field:Creation Date Of The Account:$creationdate[$get[user];date]($creationdate[$get[user];time] ago):yes}{field:Server Join Date:$memberjoineddate[$get[user];date]($memberjoineddate[$get[user];time] ago):yes}{field:Roles:$replacetext[$replacetext[$checkcondition[$findnumbers[$charcount[$userroles[$get[user];mentions;, ]]]>=1096];true;Too Many To Display In This Specific Embed];false;$replacetext[$replacetext[$checkcondition[$userroles[$get[user]]==];true;No Roles];false;$userroles[$get[user];mentions;, ]]]:yes}{field:Bot:$tolocaleuppercase[$isbot[$get[user]]]:yes}{field:Avatar URLs:[PNG]($replaceText[$useravatar[$get[user]];webp;png]) | [WEBP]($replaceText[$useravatar[$get[user]];png;webp]) | [JPEG]($replaceText[$replaceText[$useravatar[$get[user]];webp;jpeg];png;jpeg]):yes}{thumbnail:$useravatar[$get[user]]}{footer:Requested By $usertag:$authoravatar}{timestamp}{color:RANDOM};yes]
$let[user;$findMembers[$message;10;{id}]]
$endElseIf
$elseif[$findMembers[$message;10;{position}]==]
$reply[$messageid;:information_source: About ID: **$get[user]**{field:Mention:<@$get[user]>:yes}{field:Username:$username[$get[user]]:yes}{field:Nickname:$replacetext[$replacetext[$checkcondition[$username[$get[user]]==$nickname[$get[user]]];true;None];false;$nickname[$get[user]]]:yes}{field:Creation Date Of The Account:$creationdate[$get[user];date]($creationdate[$get[user];time] ago):yes}{field:Server Join Date:$memberjoineddate[$get[user];date]($memberjoineddate[$get[user];time] ago):yes}{field:Roles:$replacetext[$replacetext[$checkcondition[$findnumbers[$charcount[$userroles[$get[user];mentions;, ]]]>=1096];true;Too Many To Display In This Specific Embed];false;$replacetext[$replacetext[$checkcondition[$userroles[$get[user]]==];true;No Roles];false;$userroles[$get[user];mentions;, ]]]:yes}{field:Bot:$tolocaleuppercase[$isbot[$get[user]]]:yes}{field:Avatar URLs:[PNG]($replaceText[$useravatar[$get[user]];webp;png]) | [WEBP]($replaceText[$useravatar[$get[user]];png;webp]) | [JPEG]($replaceText[$replaceText[$useravatar[$get[user]];webp;jpeg];png;jpeg]):yes}{thumbnail:$useravatar[$get[user]]}{footer:Requested By $usertag:$authoravatar}{timestamp}{color:RANDOM};yes]
$let[user;$authorid]
$endelseif
$endIf`,
}, {
    type:"awaitedCommand",
    name:"whois",
    code:`$if[$isNumber[$message[1]]==true]
$reply[$messageid;:information_source: About ID: **$get[user]**{field:Mention:<@$get[user]>:yes}{field:Username:$username[$get[user]]:yes}{field:Nickname:$replacetext[$replacetext[$checkcondition[$username[$get[user]]==$nickname[$get[user]]];true;None];false;$nickname[$get[user]]]:yes}{field:Creation Date Of The Account:$creationdate[$get[user];date]($creationdate[$get[user];time] ago):yes}{field:Server Join Date:$memberjoineddate[$get[user];date]($memberjoineddate[$get[user];time] ago):yes}{field:Roles:$replacetext[$replacetext[$checkcondition[$findnumbers[$charcount[$userroles[$get[user];mentions;, ]]]>=1096];true;Too Many To Display In This Specific Embed];false;$replacetext[$replacetext[$checkcondition[$userroles[$get[user]]==];true;No Roles];false;$userroles[$get[user];mentions;, ]]]:yes}{field:Bot:$tolocaleuppercase[$isbot[$get[user]]]:yes}{field:Avatar URLs:[PNG]($replaceText[$useravatar[$get[user]];webp;png]) | [WEBP]($replaceText[$useravatar[$get[user]];png;webp]) | [JPEG]($replaceText[$replaceText[$useravatar[$get[user]];webp;jpeg];png;jpeg]):yes}{thumbnail:$useravatar[$get[user]]}{footer:Requested By $usertag:$authoravatar}{timestamp}{color:RANDOM};yes]
$let[user;$splittext[$message[1]]]
$textSplit[$getUserVar[userav];\n]
$elseIf[$toLowercase[$message[1]]==cancel]
$getVar[no] Cancelled
$endElseIf
$else
$reply[$messageid;:information_source: About ID: **$get[user]**{field:Mention:<@$get[user]>:yes}{field:Username:$username[$get[user]]:yes}{field:Nickname:$replacetext[$replacetext[$checkcondition[$username[$get[user]]==$nickname[$get[user]]];true;None];false;$nickname[$get[user]]]:yes}{field:Creation Date Of The Account:$creationdate[$get[user];date]($creationdate[$get[user];time] ago):yes}{field:Server Join Date:$memberjoineddate[$get[user];date]($memberjoineddate[$get[user];time] ago):yes}{field:Roles:$replacetext[$replacetext[$checkcondition[$checkcontains[$checkcondition[$findnumbers[$charcount[$userroles[$get[user];mentions;, ]]]>=1096];true;Too Many To Display In This Specific Embed];false;$replacetext[$replacetext[$userroles[$get[user]]==];true;No Roles];false;$userroles[$get[user];mentions;, ]]]:yes}{field:Bot:$tolocaleuppercase[$isbot[$get[user]]]:yes}{field:Avatar URLs:[PNG]($replaceText[$useravatar[$get[user]];webp;png]) | [WEBP]($replaceText[$useravatar[$get[user]];png;webp]) | [JPEG]($replaceText[$replaceText[$useravatar[$get[user]];webp;jpeg];png;jpeg]):yes}{thumbnail:$useravatar[$get[user]]}{footer:Requested By $usertag:$authoravatar}{timestamp}{color:RANDOM};yes]
$let[user;$authorid]
$endIf
$suppressErrors[$getVar[emoji_fail] Cancelled]`}]