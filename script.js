const { Client, GatewayIntentBits, REST, Routes } = require("discord.js");
const sql = require("mssql");
require("dotenv").config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

// Configuração da conexão MS SQL
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_HOST,
  database: process.env.DB_NAME,
  options: {
    encrypt: true, // necessário para conexões seguras
    trustServerCertificate: true, // necessário para ambientes locais
  },
};

// Registrar comandos no Discord
const commands = [
  {
    name: "rui1",
    description: "Usa o comando especial Ito Bashiri.",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Registrando comandos de aplicação...");
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: commands,
    });
    console.log("Comandos registrados com sucesso!");
  } catch (error) {
    console.error("Erro ao registrar comandos:", error);
  }
})();

client.once("ready", () => {
  console.log(`Bot ${client.user.tag} está online!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const commandName = interaction.commandName.toLowerCase();

  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request()
      .input("commandName", sql.NVarChar, commandName)
      .query("SELECT response FROM commands WHERE command_name = @commandName");

    if (result.recordset.length === 0) {
      await interaction.reply("❌ Comando não encontrado no banco de dados.");
      return;
    }

    const response = result.recordset[0].response.replace("{user}", interaction.user.id);
    await interaction.reply(response);
  } catch (error) {
    console.error("Erro ao processar comando:", error);
    await interaction.reply("❌ Ocorreu um erro ao executar o comando.");
  }
});

client.login(process.env.TOKEN);
