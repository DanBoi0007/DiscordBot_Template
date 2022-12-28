const { loadCommands } = require("../../Handlers/commandHandler");
const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log("The client is now ready.");

    loadCommands(client);

    client.user.setActivity("this server!", { type: ActivityType.Watching }); // Change text in "" to set status, change ActivityType to other with .Watching .Playing .Listening
  },
};
