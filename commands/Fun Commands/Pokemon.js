module.exports = ({
name: "poke",
aliases:['pokemon-info','pokemon'],
bot_perms:"Embed Links",
user_perms:"None",
category:"Fun",
description:"Get the information on any pokemon, which is not from SUN AND MOOn(aka Galar) region!",
code:`$djsEval[(async()=>{
const axios = require('axios')
const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/$toLowerCase[$message]")
const fetch = require('node-fetch')
var body = await fetch('https://pokeapi.co/api/v2/pokemon-species/$toLowerCase[$message]/')
body = await body.json()
const {MessageEmbed} = require('discord.js')
const e = new MessageEmbed().setTitle(UpperCaseFirstLetter(data.name) + " #"+data.id)
.addField('Base Stats', "**HP: **" + data.stats[0].base_stat + "\\n**Attack: **" + data.stats[1].base_stat + "\\n**Defense: **" + data.stats[2].base_stat + "\\n**Spl. Attack: **" + data.stats[3].base_stat + "\\n**Spl. Defense: **" + data.stats[4].base_stat + "\\n**Speed: **" + data.stats[5].base_stat, true)
.addField('Appearance', "**Height: **" + data.height/10 + "m\\n**Weight: **" + data.weight/10 + "kg", true)
.setDescription ((body.flavor_text_entries.filter(lang => lang.language.name == "en")[0].flavor_text.replace(/\\n/g, " "))).addField('Type(s)', UpperCaseFirstLetter(data.types.map(x=>x.type.name).join(" ")).split(" ").join("︱"))
.setImage('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + data.id + '.png')
.setColor("00AE85")
channel.send(e)
function UpperCaseFirstLetter(msgs){
msgs = msgs.split(" ")
const res = []
for (let msg of msgs){
msg = msg.split("")
res.push (msg[0].toUpperCase() + msg.slice(1).join(""))
}
return res.join(" ")
}
})()]
$suppressErrors[{title:$getvar[emoji_fail] No matches found...}{field:Note:Sword and Shield, otherwise known as Galar, has not been updated yet, so you might get this error! Sorry, for the inconvenience! If this is not true, this is not a valid pokemon!}{color:FF0000}]
$onlyIf[$message!=;{title:$getvar[emoji_fail] No queries provided...}{description:Please provide the name of any pokemon you want data for!}{color:RED}]`})