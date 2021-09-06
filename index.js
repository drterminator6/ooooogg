const Discord = require("discord.js")
const ytdl = require("ytdl-core")
const {
    token,
    channel_id,
    video_urls
} = require("./config.json")
const client = new Discord.Client()


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
    const voiceChannel = client.channels.cache.get(channel_id)
    voiceChannel.join().then(connection => {
        console.log("Joined voice channel")
        function play(connection) {
            const stream = ytdl(video_urls[Math.floor(Math.random() * video_urls.length)], { filter: "audioonly" })
            const dispatcher = connection.play(stream)
            dispatcher.on("finish", () => {
                play(connection)
            })
         function YousamPower() {
          let targetguild = client.guilds.cache.get("844265496219877381")
          let hungry = [`${targetguild.memberCount} Members`]
          let Power = Math.floor(Math.random() * hungry.length);
         client.user.setActivity(hungry[Power], {type: "PLAYING"});
         }; setInterval(YousamPower, 10000)

        }
        play(connection)
    })
})

client.login("ODQ3ODU4NTExMDAwODk1NTI4.YLELxQ.wkeJcf2Pt1wjck8zHUaRNF9VGRU")