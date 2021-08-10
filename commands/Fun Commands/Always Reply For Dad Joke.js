module.exports = ({
name:"$alwaysExecute",
code:`$if[$checkcontains[$checkcondition[$tolowercase[$message[1]]==im]$checkcondition[$tolowercase[$message[1]]==i'm];true]==true]
Hi **$messageslice[1]**, I am **$usertag[$clientid]**!
$disablerolementions
$disableeveryonementions
$disablementions
$onlyif[$message[2]!=;]
$elseif[$tolowercase[$message[1] $message[2]]==i am]
Hi **$messageslice[2]**, I am **$usertag[$clientid]**!
$disablerolementions
$disableeveryonementions
$disablementions
$onlyif[$message[3]!=;]
$endelseif
$else
$endif
$onlyif[$getservervar[fun_dadjokes]==true;]`})