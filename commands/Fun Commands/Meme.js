module.exports = ({
name:"meme",
bot_perms:"Embed Links",
user_perms:"None",
category:"Fun",
description:"Get a random meme from a random subreddit! Reference link to the original meme is provided as a hyperlink in the title!",
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
$servercooldown[2s;On a cooldown!]
$onlyif[$isbot[$authorid]==false;]`})