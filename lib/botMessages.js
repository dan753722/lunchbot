'use strict';

var lunchLibrary = ["Hanaichi", "Ya Souv", "Bing Boy", "Shining Asia", "Maccas", "Salsa's", "Thai blah~", "Cats", "Hawks", "Collingwood", "North Melbourne", "Sumo Salad", "Chinabar", "Schnitz", "TGI Fridays", 
"You should have brought lunch today!", "Secret Kitchen (Get that wallet out)", "Buy someone else lunch instead (Like Josh or Daniel)", "Grill'd", "Papa Rich", "Buy Pizza for the office (You know you want to)",
"Dumpling King", "Joy", "Nandos", "Spud Bar", "How am I supposed to know I am a robot", "Get a smoothie or something", "Sushi", "Subway", "Baker's Delight", "Check the bin", 
"Keep on rolling rolling rolling", "Buy a whole Chicken", "Steal Richards Lunch", "Get a cookie", "Hataka", "New Ramen place near Coles", "Vietnamese Roll place", 
"Have some fruit instead", "Treat everyone to Pancake Parlour", "Outlook is cloudy. Try again later", "That chocolcate place near TGI's (You know that one)", "Do you think you deserve lunch today?" ];

var getSuggestion = function () {
  var rand = Math.random();
  return lunchLibrary[Math.floor(rand * lunchLibrary.length)];
};

module.exports = {
  hanaichi: function (bot, message) {
    bot.reply(message, getSuggestion());
  },

  danTheMan: function (bot, message) {
    bot.reply(message, "Do you mean the fat Dan? Dan is the man. Dan is awesome. Just call him Danny boy. He will be at your service.");
  },

  helloJosh: function (bot, message) {
    bot.reply(message, "hello josh");
  },

  yesSir: function (bot, message) {
    bot.reply(message, "Yes Sir!");
  },

  youShutUp: function (bot, message) {
    bot.reply(message, "You shut it.");
  }
}
