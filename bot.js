const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`LightAlwasy Resmi Botu Olan  ${client.user.tag} Sunucuda Aktif!`);
});

client.on('message', msg => {
  console.log (`LOG: S:${msg.guild.name}  M:${msg.content}  Y:${msg.author.tag}`);
  if (msg.author.id === ayarlar.id) return;
  if (msg.author.bot) return;

  if (msg.content === prefix + 'davet') {
    msg.channel.sendMessage('Discord Destek Sunucu Linkimiz');
  }
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('AleykumSelam Kardeşim Hoşgeldin.');
  }
  if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.reply('Botun Pingi : ' + client.ping + ' Değerinde.' );
    }
  if (msg.content.toLowerCase() === prefix + 'temizle') {
    msg.channel.bulkDelete(100);
    msg.channel.sendMessage("100 Adet Mesaj Temizlendi.");
  }
});

client.login(ayarlar.token);
