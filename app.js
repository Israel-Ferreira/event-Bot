//importação dos modulos
var  Telegram = require('node-telegram-bot-api')

var token = "427228814:AAEuvxQt-1250lreu6NOTuGsXtVq9umbq4U"

var bot = new Telegram(token,{polling: true})

bot.onText(/\/insultar/,function(msg,match){
    var fromId = msg.from.id;
    var insultos = ['Filho da puta','Vai toma no cu, seu merda','Você é um merda'];
    var  chosenCurseWord = insultos[Math.floor(Math.random() * insultos.length)];
    bot.sendMessage(fromId,chosenCurseWord);
});

bot.onText(/\/saudacao/,function(msg,match){
    var fromId = msg.from.id;
    var helloUser = ["Olá","Oi","Olá,tudo bem com você"];
    var helloSelect = helloUser[Math.floor(Math.random() * helloUser.length)];
    bot.sendMessage(fromId,helloSelect);
});

bot.on('message',function(msg){
    var chatId = msg.chat.id;
    var photo = "http://cdn.codesamplez.com/wp-content/uploads/2013/04/Lambda.png";
    bot.sendPhoto(chatId,photo);
});




 