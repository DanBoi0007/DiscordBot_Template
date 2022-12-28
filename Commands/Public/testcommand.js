const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  PermissionFlagsBits,
  Client,
  ThreadChannel,
  Invite,
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("slashcommand")
        .setDescription("This is a slash command description!"),


    async execute(interaction) {
        await interaction.reply("This is a slash command reply!")
    }
}