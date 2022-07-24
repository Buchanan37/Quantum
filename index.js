const Discord = require("discord.js")

const TOKEN = "MTAwMDg1ODIyODk0MDM0MTM1OA.GtW_na.u0gi1uIF7TE5JqQoyThJqd33VtE_knnSVTdn7k"

const client = new Discord.Client({
    intents: [
        "Guilds",
        "GuildMessages"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.login(TOKEN)