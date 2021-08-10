module.exports = [{
name:"automeme",
type:"awaitedCommand",
code:`$if[$jsonRequest[https://meme-api.herokuapp.com/gimme;nsfw]!=true]
$editMessage[$get[id];{title:$jsonRequest[https://meme-api.herokuapp.com/gimme;title;]}
{url:$jsonRequest[https://meme-api.herokuapp.com/gimme;postLink;]}
{image:$jsonRequest[https://meme-api.herokuapp.com/gimme;url;]}
{color:RANDOM}]
$wait[$random[2;3]s]
$let[id;$sendMessage[$getvar[emoji_loading] Fetching Your Meme!;yes]]
$else
$editMessage[$get[id];{title:$jsonRequest[https://meme-api.herokuapp.com/gimme;title;]}
{url:$jsonRequest[https://meme-api.herokuapp.com/gimme;postLink;]}
{image:$jsonRequest[https://meme-api.herokuapp.com/gimme;url;]}
{color:RANDOM}]
$wait[$random[2;3]s]
$let[id;$sendMessage[$getvar[emoji_loading] Fetching Your Meme(NSFW, sent because this is an NSFW channel!);yes]]
$onlyNSFW[The requested meme contains NSFW and this channel is not an NSFW channel, so I could not show that meme!]
$endIf
$cooldown[30s;]
$onlyif[$getservervar[fun_automeme]==true;]`}]