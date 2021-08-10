module.exports = ({
name:"joke",
bot_perms:"Embed Links",
user_perms:"None",
description:"Get a random joke",
category:"Fun",
code:`$addfield[Here's your joke, $randomtext[R;r]$randomtext[E;e]$randomtext[S;s]$randomtext[P;p]$randomtext[e;E]$randomtext[C;c]$randomtext[T;t]$randomtext[E;e;e;E]$randomtext[D;d] $randomtext[s;S]$randomtext[I;i]$randomtext[r;R]/$randomtext[M;m]$randomtext[A;a]$randomtext[d;D]$randomtext[a;A]$randomtext[m;M];$jsonrequest[https://api.popcatdev.repl.co/joke;joke]]
$footer[Requested by $usertag;$authoravatar]
$addtimestamp
$color[RANDOM]
$cooldown[5s;$getvar[emoji_fail] Damn, chill and take a sip of beer for **%time%**]`})