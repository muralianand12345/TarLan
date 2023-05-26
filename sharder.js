const { ShardingManager } = require('discord.js'); 
require("dotenv").config();

const manager = new ShardingManager('./index.js', {
    token: process.env.TOKEN || "YOUR_BOT_TOKEN", 
    respawn: true,
    autoSpawn: true,
    totalShards: 1, 
    shardList: "auto", 
});

manager.spawn({ amount: manager.totalShards, delay: null, timeout: -1 }).then((shards) => {
    console.log(`[CLIENT] ${shards.size} shard(s) spawned.`);
}).catch((err) => {
    console.log("[CLIENT] An error has occurred :", err);
});

manager.on("shardCreate", (shard) => {
    shard.on("ready", () => {
        console.log(`[CLIENT] Shard ${shard.id} connected`);
    });
});
