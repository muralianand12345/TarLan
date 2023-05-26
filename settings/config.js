require("dotenv").config();
const { resolve } = require("path");

module.exports = {
    TOKEN: process.env.TOKEN || "YOUR_TOKEN",
    EMBED_COLOR: process.env.EMBED_COLOR || "#000001", 

    SEARCH_DEFAULT: ["jvke", "justin bieber", "post malone", "anime song"],

    OWNER_ID: process.env.OWNER_ID || "YOUR_CLIENT_ID", 

    NP_REALTIME: process.env.NP_REALTIME || "BOOLEAN", 
    LEAVE_TIMEOUT: parseInt(process.env.LEAVE_TIMEOUT || "120000"),

    LANGUAGE: {
      defaultLocale: process.env.LANGUAGE || "en", 
      directory: resolve("languages"), 
    },

    DEV_ID: [],

    MONGO_URI: process.env.MONGO_URI || "YOUR_MONGO_URI", 
    LIMIT_TRACK: parseInt(process.env.LIMIT_TRACK || "50"),
    LIMIT_PLAYLIST: parseInt(process.env.LIMIT_PLAYLIST || "10"), 

    DEFAULT_SEARCH: "ytsearch", 
    NODES: [
      { 
        identifier: "Local LavaLink",
        host: process.env.NODE_HOST || "localhost",
        port: parseInt(process.env.NODE_PORT || "5555"),
        password: process.env.NODE_PASSWORD || "123456",
        retryAmount: 10,
        retryDelay: 7500,
        secure: false
      } 
    ],
}