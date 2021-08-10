module.exports = ({
name:"mock",
bot_perms:"Embed Links",
user_perms:"None",
description:"Mock a specific text",
category:"Fun",
code:`$title[Mocking($randomtext[B;b]$randomtext[A;a]$randomtext[D;d] $randomtext[M;m]$randomtext[a;A]$randomtext[N;n]$randomtext[n;N]$randomtext[E;e]$randomtext[R;r]$randomtext[S;s])]
$description[**$jsonrequest[https://api.popcatdev.repl.co/mock?text=$replacetext[$replacetext[$message; ;+];**;];text]**]
$color[RANDOM]
$onlyif[$message!=;$getvar[emoji_fail] Lets like mock something, you're a boring topic to mock(:billed_cap:)]
$cooldown[$replacetext[$replacetext[$checkcondition[$message==];true;1s];false;5s];$getvar[emoji_fail] Damn, chill and take a sip of beer for **%time%**]`})