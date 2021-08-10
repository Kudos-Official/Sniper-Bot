module.exports = ({
name:"snipe",
bot_perms:"Embed Links",
user_perms:"None",
category:"Snipe",
description:"Get the recently deleted messages of the channel or the whole server. You can get any number of message that was deleted. Enter the number of the snipe you want to get it. You can always toggle the pages using the reactions.\n\nExample: \"$getServerVar[prefix]snipe 3 #general\" will return the third recently deleted message of the channel. If we enter \"guild\" instead of mentioning a channel, it will do the same thing but of the whole guild.",
code:`$if[$checkcontains[$message;guild]==true]
$reactioncollector[$splittext[1];$authorID;5m;⬅️,➡️,🗑️;previous,next,delete;yes]
$textsplit[$sendmessage[{author:$usertag[$get[author]]:$useravatar[$get[author]]}{description:$get[message]}{image:$get[image]}{color:RANDOM}{footer:Message Deleted In #$channelname[$get[channel]] | Snipe $get[page]/$sub[$gettextsplitlength;1] | Deleted at}{timestamp:$get[time]};yes]; ]
$let[author;$advancedtextsplit[$getservervar[snipe_author];ᾟ;$get[page]]]
$let[message;$advancedtextsplit[$getservervar[snipe_message];ᾟ;$get[page]]]
$let[time;$advancedtextsplit[$getservervar[snipe_time];ᾟ;$get[page]]]
$let[image;$advancedtextsplit[$getservervar[snipe_image];ᾟ;$get[page]]]
$setuservar[snipe_page;$get[page]]
$setuservar[snipe_channel]
$onlyIf[$sub[$gettextsplitlength;1]>=$get[page];There are no more than **$getservervar[snipe_count]** deleted messages logged by me in **the whole server**!]
$onlyif[$isnumber[$get[page]]==true;**__An Error Occurred__**\n\n**You Have Used The Command \`$getservervar[prefix]snipe\` in a wrong way!**\`\`\`$getservervar[prefix]snipe [optional page number] [optional channel mention]\`\`\`\n**Example Usage**\`\`\`$getservervar[prefix]snipe 3 #general\`\`\`The Above Example Will Return The Third Recently Deleted Message Of The Channel General!]
$textsplit[$getservervar[snipe_message];ᾟ]
$let[channel;$advancedtextsplit[$getservervar[snipe_mchannel];ᾟ;$get[page]]]
$let[page;$replacetext[$replacetext[$checkcondition[$replacetext[$tolowercase[$message];guild;]!=];true;$replacetext[$tolowercase[$message];guild;]];false;1]]
$setuservar[snipe_type;guild]
$else
$reactioncollector[$splittext[1];$authorID;5m;⬅️,➡️,🗑️;previous,next,delete;yes]
$textsplit[$sendmessage[{author:$usertag[$get[author]]:$useravatar[$get[author]]}{description:$get[message]}{image:$get[image]}{color:RANDOM}{footer:Message Deleted In #$channelname[$get[channel]] | Snipe $get[page]/$sub[$gettextsplitlength;1] | Deleted at}{timestamp:$get[time]};yes]; ]
$let[author;$advancedtextsplit[$getchannelvar[snipe_author;$get[channel]];ᾟ;$get[page]]]
$let[message;$advancedtextsplit[$getchannelvar[snipe_message;$get[channel]];ᾟ;$get[page]]]
$let[time;$advancedtextsplit[$getchannelvar[snipe_time;$get[channel]];ᾟ;$get[page]]]
$let[image;$advancedtextsplit[$getchannelvar[snipe_image;$get[channel]];ᾟ;$get[page]]]
$setuservar[snipe_page;$get[page]]
$setuservar[snipe_channel;$get[channel]]
$onlyIf[$sub[$gettextsplitlength;1]>=$get[page];There are no more than **$getchannelvar[snipe_count]** deleted messages logged by me in **$channelname**!]
$onlyif[$isnumber[$get[page]]==true;**__An Error Occurred__**\n\n**You Have Used The Command \`$getservervar[prefix]snipe\` in a wrong way!**\`\`\`$getservervar[prefix]snipe [optional page number] [optional channel mention]\`\`\`\n**Example Usage**\`\`\`$getservervar[prefix]snipe 3 #general\`\`\`The Above Example Will Return The Third Recently Deleted Message Of The Channel General!]
$let[page;$replacetext[$replacetext[$checkcondition[$nomentionmessage==];true;1];false;$nomentionmessage]]
$textsplit[$getchannelvar[snipe_message;$get[channel]];ᾟ]
$let[channel;$mentionedchannels[1;yes]]
$setuservar[snipe_type;channel]
$endif`})