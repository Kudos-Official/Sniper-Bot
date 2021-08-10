module.exports = [{
name:"mlbdelete",
type:"awaitedCommand",
code:`$deletemessage[$splittext[1]]
$wait[2s]
$editmessage[$splittext[1];$getvar[emoji_success] Successfully deleted the message!]
$deletemessage[$get[i]]
$wait[2s]
$textsplit[$sendmessage[$getvar[emoji_loading] Deleting the message..;yes]; ]
$let[i;$message[1]]`}]