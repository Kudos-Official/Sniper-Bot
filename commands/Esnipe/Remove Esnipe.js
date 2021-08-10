module.exports = ({
name:"remove-esnipe",
bot_perms:"Embed Links",
user_perms:"Manage Server",
category:"Esnipe",
description:"Remove a specific esnipe message, or nuke all of them. You can either enter \"guild\" or \"channel\" to remove from any of them. Example: \"{prefix}remove-esnipe guild all\" removes all esnipes from the guild. You can enter a number instead of number, or channel instead of guild. You can also mention a channel if you want to remove from a channel",
code:`$if[$isnumber[$nomentionmessage[2]]==true]
$if[$tolowercase[$nomentionmessage[1]]==channel]
$getvar[emoji_success] Removed the esnipe with the number **$get[n]** from the channel <#$get[c]>! 
$setchannelvar[esnipe_time;$joinsplittext[ᾟ];$get[c]]
$removetextsplitelement[$get[n]]
$textsplit[$getchannelvar[esnipe_time;$get[c]];ᾟ]
$setchannelvar[esnipe_omessage;$joinsplittext[ᾟ];$get[c]]
$removetextsplitelement[$get[n]]
$textsplit[$getchannelvar[esnipe_omessage;$get[c]];ᾟ]
$setchannelvar[esnipe_link;$joinsplittext[ᾟ];$get[c]]
$removetextsplitelement[$get[n]]
$textsplit[$getchannelvar[esnipe_link;$get[c]];ᾟ]
$setchannelvar[esnipe_image;$joinsplittext[ᾟ];$get[c]]
$removetextsplitelement[$get[n]]
$textsplit[$getchannelvar[esnipe_image;$get[c]];ᾟ]
$setchannelvar[esnipe_author;$joinsplittext[ᾟ];$get[c]]
$removetextsplitelement[$get[n]]
$textsplit[$getchannelvar[esnipe_author;$get[c]];ᾟ]
$setchannelvar[esnipe_message;$joinsplittext[ᾟ];$get[c]]
$removetextsplitelement[$get[n]]
$setchannelvar[esnipe_count;$sub[$getchannelvar[esnipe_count;$get[c]];1];$get[c]]	
$onlyif[$sub[$gettextsplitlength;1]>=$get[n];$getvar[emoji_fail] Only **$gettextsplitlength** esnipes in the channel <#$get[c]> yet!]
$textsplit[$getchannelvar[esnipe_message;$get[c]];ᾟ]
$let[n;$nomentionmessage[2]]
$let[c;$mentionedchannels[1;yes]]
$elseif[$tolowercase[$message[1]]==guild]
$getvar[emoji_success] Removed the esnipe with the number **$get[n]** from the server!
$setservervar[esnipe_mchannel;$joinsplittext[ᾟ]]
$removetextsplitelement[$get[n]]
$textsplit[$getservervar[esnipe_mchannel];ᾟ]
$setservervar[esnipe_time;$joinsplittext[ᾟ]]
$removetextsplitelement[$get[n]]
$textsplit[$getservervar[esnipe_time];ᾟ]
$setservervar[esnipe_omessage;$joinsplittext[ᾟ]]
$removetextsplitelement[$get[n]]
$textsplit[$getservervar[esnipe_omessage];ᾟ]
$setservervar[esnipe_link;$joinsplittext[ᾟ]]
$removetextsplitelement[$get[n]]
$textsplit[$getservervar[esnipe_link];ᾟ]
$setservervar[esnipe_image;$joinsplittext[ᾟ]]
$removetextsplitelement[$get[n]]
$textsplit[$getservervar[esnipe_image];ᾟ]
$setservervar[esnipe_author;$joinsplittext[ᾟ]]
$removetextsplitelement[$get[n]]
$textsplit[$getservervar[esnipe_author];ᾟ]
$setservervar[esnipe_message;$joinsplittext[ᾟ]]
$removetextsplitelement[$get[n]]
$setservervar[esnipe_count;$sub[$getservervar[esnipe_count];1]]
$onlyif[$sub[$gettextsplitlength;1]>=$get[n];$getvar[emoji_fail] Only **$gettextsplitlength** esnipes in the server yet!]
$textsplit[$getservervar[esnipe_message];ᾟ]
$let[n;$nomentionmessage[2]]
$endelseif
$else
$getvar[emoji_fail] Can only have **guild** or **channel** esnipes!
$endif
$elseif[$tolowercase[$nomentionmessage[2]]==all]
$if[$tolowercase[$nomentionmessage[1]]==channel]
$getvar[emoji_success] Removed **all** esnipes from the channel <#$get[c]>! 
$setchannelvar[esnipe_omessage;;$get[c]]
$setchannelvar[esnipe_link;;$get[c]]
$setchannelvar[esnipe_time;;$get[c]]
$setchannelvar[esnipe_image;;$get[c]]
$setchannelvar[esnipe_author;;$get[c]]
$setchannelvar[esnipe_message;;$get[c]]
$setchannelvar[esnipe_count;0;$get[c]]
$let[c;$mentionedchannels[1;yes]]
$elseif[$tolowercase[$message[1]]==guild]
$getvar[emoji_success] Removed **all** esnipes from the server!
$setservervar[esnipe_mchannel;]
$setservervar[esnipe_time;]
$setservervar[esnipe_link;]
$setservervar[esnipe_omessage;]
$setservervar[esnipe_image;]
$setservervar[esnipe_author;]
$setservervar[esnipe_message;]
$setservervar[esnipe_count;0]
$endelseif
$else
$getvar[emoji_fail] Can only have **guild** or **channel** esnipes!
$endif
$endelseif
$else
$getvar[emoji_fail] You can either remove **all**, or a **specific esnipe number** from the **guild** or a **specific channel**!
$endif
$onlyperms[manageserver;$getvar[emoji_fail] You do not have the Manage Server permissions!]`})