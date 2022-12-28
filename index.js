const { // Make sure to read README.txt
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");

const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partial: [User, Message, GuildMember, ThreadMember],
});
const dotenv = require("dotenv");

const { loadEvents } = require("./Handlers/eventHandler");

client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();
dotenv.config();

loadEvents(client);

client.login(process.env.TOKEN);
