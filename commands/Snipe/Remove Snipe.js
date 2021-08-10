module.exports = ({
name:"remove-snipe",
bot_perms:"Embed Links",
user_perms:"Manage Server",
category:"Snipe",
description:"Remove a specific snipe message, or nuke all of them. You can either enter \"guild\" or \"channel\" to remove from any of them. Example: \"{prefix}remove-snipe guild all\" removes all snipes from the guild. You can enter a number instead of number, or channel instead of guild. You can also mention a channel if you want to remove from a channel",
code:`$if[$isnumber[$nomentionmessage[2]]==true]
$if[$tolowercase[$nomentionmessage[1]]==channel]
$getvar[emoji_success] Removed the snipe with the number **$get[n]** from the channel <#$get[c]>! 
$setchannelvar[snipe_time;$joinsplittext[ᾟ];$get[c]]
$removetextsplitelement[$get[n]]
$textsplit[$getchannelvar[snipe_time;$get[c]];ᾟ]
$setchannelvar[snipe_image;$joinsplittext[ᾟ];$get[c]]
$removetextsplitelement[$get[n]]
$textsplit[$getchannelvar[snipe_image;$get[c]];ᾟ]
$setchannelvar[snipe_author;$joinsplittext[ᾟ];$get[c]]
$removetextsplitelement[$get[n]]
$textsplit[$getchannelvar[snipe_author;$get[c]];ᾟ]
$setchannelvar[snipe_message;$joinsplittext[ᾟ];$get[c]]
$removetextsplitelement[$get[n]]
$setchannelvar[snipe_count;$sub[$getchannelvar[snipe_count;$get[c]];1];$get[c]]	
$onlyif[$sub[$gettextsplitlength;1]>=$get[n];$getvar[emoji_fail] Only **$gettextsplitlength** snipes in the channel <#$get[c]> yet!]
$textsplit[$getchannelvar[snipe_message;$get[c]];ᾟ]
$let[n;$nomentionmessage[2]]
$let[c;$mentionedchannels[1;yes]]
$elseif[$tolowercase[$message[1]]==guild]
$getvar[emoji_success] Removed the snipe with the number **$get[n]** from the server!
$setservervar[snipe_mchannel;$joinsplittext[ᾟ]]
$removetextsplitelement[$get[n]]
$textsplit[$getservervar[snipe_mchannel];ᾟ]
$setservervar[snipe_time;$joinsplittext[ᾟ]]
$removetextsplitelement[$get[n]]
$textsplit[$getservervar[snipe_time];ᾟ]
$setservervar[snipe_image;$joinsplittext[ᾟ]]
$removetextsplitelement[$get[n]]
$textsplit[$getservervar[snipe_image];ᾟ]
$setservervar[snipe_author;$joinsplittext[ᾟ]]
$removetextsplitelement[$get[n]]
$textsplit[$getservervar[snipe_author];ᾟ]
$setservervar[snipe_message;$joinsplittext[ᾟ]]
$removetextsplitelement[$get[n]]
$setservervar[snipe_count;$sub[$getservervar[snipe_count];1]]
$onlyif[$sub[$gettextsplitlength;1]>=$get[n];$getvar[emoji_fail] Only **$gettextsplitlength** snipes in the server yet!]
$textsplit[$getservervar[snipe_message];ᾟ]
$let[n;$nomentionmessage[2]]
$endelseif
$else
$getvar[emoji_fail] Can only have **guild** or **channel** snipes!
$endif
$elseif[$tolowercase[$nomentionmessage[2]]==all]
$if[$tolowercase[$nomentionmessage[1]]==channel]
$getvar[emoji_success] Removed **all** snipes from the channel <#$get[c]>! 
$setchannelvar[snipe_time;$get[c]]
$setchannelvar[snipe_image;$get[c]]
$setchannelvar[snipe_author;$get[c]]
$setchannelvar[snipe_message;$get[c]]
$setchannelvar[snipe_count;0;$get[c]]
$let[c;$mentionedchannels[1;yes]]
$elseif[$tolowercase[$message[1]]==guild]
$getvar[emoji_success] Removed **all** snipes from the server!
$setservervar[snipe_mchannel;]
$setservervar[snipe_time;]
$setservervar[snipe_image;]
$setservervar[snipe_author;]
$setservervar[snipe_message;]
$setservervar[snipe_count;0]
$endelseif
$else
$getvar[emoji_fail] Can only have **guild** or **channel** snipes!
$endif
$endelseif
$else
$getvar[emoji_fail] You can either remove **all**, or a **specific snipe number** from the **guild** or a **specific channel**!
$endif
$onlyperms[manageserver;$getvar[emoji_fail] You do not have the Manage Server permissions!]`})