module.exports = ({
name:"roleinfo",
aliases:['ri','role'],
bot_perms:"Embed Links",
user_perms:"None",
category:"Info",
description:"Get some basic info on a role!",
code:`$sendmessage[:information_source: About Role ID: **$get[role]**{field:Role Name:$rolename[$get[role]]:yes}{field:Mention:<@&$get[role]>:yes}{field:Role Color:$getrolecolor[$get[role]]:yes}{field:Hoisted:$tolocaleuppercase[$ishoisted[$get[role]]]:yes}{field:Mentionable:$tolocaleuppercase[$ismentionable[$get[role]]]:yes}{field:Position:$roleposition[$get[role]]:yes}{field:Time Since Creation:$creationdate[$get[role];time]}{field:Permissions:$roleperms[$get[role];, ]}{footer:Requested By $usertag:$authoravatar};no]
$disablerolementions
$suppresserrors	
$onlyif[$roleexists[$get[role]]==true;Role not found!]
$let[role;$findrole[$message]]
$suppresserrors
$onlyif[$message!=;Enter a valid role!]`})