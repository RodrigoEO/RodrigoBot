var TelegramBot = require('node-telegram-bot-api');
var token = 'XXXXXXXXXXXXXXX';

var bot = new TelegramBot(
    token, {
        polling:true
    });

bot.getMe().then(function (me) {
    console.log('Hi, my name is %s!', me.username);
});



bot.onText(/photo/, function (msg, match) {
    var fromId = msg.from.id;
    var photo = "./assets/images/bat.jpg";
    bot.sendPhoto(fromId,photo,{caption: 'Batman'} );
});


bot.onText(/hola/, function(msg, match) {
 	var fromId = msg.from.id;
 	var resp = match[1];
 	bot.sendMessage(fromId, "Hola " + msg.from.first_name);
 });

bot.onText(/loc/, function (msg, match) {
    var fromId = msg.from.id;
  bot.sendLocation(fromId, 20.07482, -98.403327);
});



bot.onText(/sound/, function (msg, match) {
    var fromId = msg.from.id;
 	console.log(msg);
    var photo = "./assets/sounds/Focus.mp3";
    bot.sendAudio(fromId,photo);
});



