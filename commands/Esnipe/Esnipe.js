module.exports = ({
name:"esnipe",
aliases:"edit-snipe",
bot_perms:"Embed Links",
user_perms:"None",
category:"Snipe",
description:"Get the recently edited messages of the channel or the whole server. You can get any number of messages that were edited. Enter the number of the esnipe you want to get it. You can always toggle the pages using the reactions.\n\nExample: \"$getServerVar[prefix]esnipe 3 #general\" will return the third recently edited message of the channel. If we enter \"guild\" instead of mentioning a channel, it will do the same thing but of the whole guild.",
code:`$if[$checkcontains[$message;guild]==true]
$reactioncollector[$splittext[1];$authorID;5m;⬅️,➡️,🗑️;eprevious,enext,edelete;yes]
$textsplit[$sendmessage[{author:$usertag[$get[author]]:$useravatar[$get[author]]}{field:Old Message:$replacetext[$replacetext[$checkcondition[$charcount[$get[old]]>=1024];true;Failed To Display Message(Too Large To Display In An Embed Field)];false;$get[old]]}{field:New Message:$replacetext[$replacetext[$checkcondition[$charcount[$get[message]]>=1024];true;Failed To Display Message(Too Large To Display In An Embed Field)];false;$get[message]]}{field:Message Link:[Click Here]($get[link])}{image:$get[image]}{color:RANDOM}{footer:Message Edited In #$channelname[$get[channel]] | Snipe $get[page]/$sub[$gettextsplitlength;1] | Edited at}{timestamp:$get[time]};yes]; ]
$let[author;$advancedtextsplit[$getservervar[esnipe_author];ᾟ;$get[page]]]
$let[message;$advancedtextsplit[$getservervar[esnipe_message];ᾟ;$get[page]]]
$let[old;$advancedtextsplit[$getservervar[esnipe_omessage];ᾟ;$get[page]]]
$let[link;$advancedtextsplit[$getservervar[esnipe_link];ᾟ;$get[page]]]
$let[time;$advancedtextsplit[$getservervar[esnipe_time];ᾟ;$get[page]]]
$let[image;$advancedtextsplit[$getservervar[esnipe_image];ᾟ;$get[page]]]
$setuservar[esnipe_page;$get[page]]
$setuservar[esnipe_channel]
$onlyIf[$sub[$gettextsplitlength;1]>=$get[page];There are no more than **$getservervar[esnipe_count]** edited messages logged by me in **the whole server**!]
$onlyif[$isnumber[$get[page]]==true;**__An Error Occurred__**\n\n**You Have Used The Command \`$getservervar[prefix]snipe\` in a wrong way!**\`\`\`$getservervar[prefix]snipe [optional page number] [optional channel mention]\`\`\`\n**Example Usage**\`\`\`$getservervar[prefix]snipe 3 #general\`\`\`The Above Example Will Return The Third Recently Edited Message Of The Channel General!]
$textsplit[$getservervar[esnipe_message];ᾟ]
$let[channel;$advancedtextsplit[$getservervar[esnipe_mchannel];ᾟ;$get[page]]]
$let[page;$replacetext[$replacetext[$checkcondition[$replacetext[$tolowercase[$message];guild;]!=];true;$replacetext[$tolowercase[$message];guild;]];false;1]]
$setuservar[esnipe_type;guild]
$else
$reactioncollector[$splittext[1];$authorID;5m;⬅️,➡️,🗑️;eprevious,enext,edelete;yes]
$textsplit[$sendmessage[{author:$usertag[$get[author]]:$useravatar[$get[author]]}{field:Old Message:$get[old]}{field:New Message:$get[message]}{field:Message Link:[Click Here]($get[link])}{image:$get[image]}{color:RANDOM}{footer:Message Edited In #$channelname[$get[channel]] | Snipe $get[page]/$sub[$gettextsplitlength;1] | Edited at}{timestamp:$get[time]};yes]; ]
$let[author;$advancedtextsplit[$getchannelvar[esnipe_author;$get[channel]];ᾟ;$get[page]]]
$let[message;$advancedtextsplit[$getchannelvar[esnipe_message;$get[channel]];ᾟ;$get[page]]]
$let[time;$advancedtextsplit[$getchannelvar[esnipe_time;$get[channel]];ᾟ;$get[page]]]
$let[image;$advancedtextsplit[$getchannelvar[esnipe_image;$get[channel]];ᾟ;$get[page]]]
$let[old;$advancedtextsplit[$getchannelvar[esnipe_omessage;$get[channel]];ᾟ;$get[page]]]
$let[link;$advancedtextsplit[$getchannelvar[esnipe_link;$get[channel]];ᾟ;$get[page]]]
$setuservar[esnipe_page;$get[page]]
$setuservar[esnipe_channel;$get[channel]]
$onlyIf[$sub[$gettextsplitlength;1]>=$get[page];There are no more than **$getchannelvar[esnipe_count]** edited messages logged by me in **$channelname**!]
$onlyif[$isnumber[$get[page]]==true;**__An Error Occurred__**\n\n**You Have Used The Command \`$getservervar[prefix]snipe\` in a wrong way!**\`\`\`$getservervar[prefix]snipe [optional page number] [optional channel mention]\`\`\`\n**Example Usage**\`\`\`$getservervar[prefix]snipe 3 #general\`\`\`The Above Example Will Return The Third Recently Edited Message Of The Channel General!]
$let[page;$replacetext[$replacetext[$checkcondition[$nomentionmessage==];true;1];false;$nomentionmessage]]
$textsplit[$getchannelvar[esnipe_message;$get[channel]];ᾟ]
$let[channel;$mentionedchannels[1;yes]]
$setuservar[esnipe_type;channel]
$endif`})