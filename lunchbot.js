'use strict';

var Botkit = require("botkit");
var controller = Botkit.slackbot({
  debug: true
});

var messageBank = require("./lib/botMessages.js");
var botScope = ["direct_message", "direct_mention", "mention"];

controller.spawn({
  token: "YOUR_BOT_TOKEN"
}).startRTM();

controller.hears("suggest lunch", botScope, messageBank.hanaichi);

controller.hears("[Dd]an", botScope, messageBank.danTheMan);

controller.hears("come back up", botScope, messageBank.yesSir);

controller.hears("shut up", botScope, messageBank.youShutUp);
