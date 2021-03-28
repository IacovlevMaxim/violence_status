const { Client } = require('discord-rpc');

const client = new Client({ transport: 'ipc' })

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "#WeAreViolence",
            assets: {
                large_image: "large",
                large_text: "Join us!",
                small_image: "large",
                small_text: "Made by Stew#1902"
            },
            buttons: [
                { label: "Join Team Violence!", url: "https://discord.gg/k4haTgW" },
            ]
        }
    })
    .catch(console.error)
    console.log("Status is ready to use!");
});

client.login({ clientId: "825440024031526934" }).catch(console.error);

