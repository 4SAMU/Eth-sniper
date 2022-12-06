/** @format */

const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const TelegramUser = ["2008940424"];

export const sendNotification = async (message: any) => {
  console.log("sending notification");
  const chatIds = TelegramUser;
  chatIds.forEach((chat: string | number) => {
    bot.telegram
      .sendMessage(chat, message, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
      })
      .catch((error: any) => {
        console.log("Encoutered an error while sending notification to ", chat);
        console.log(error);
      });
  });
  console.log("Done!!!!");
};

bot.start((ctx: { reply: (arg0: string) => any }) =>
  ctx.reply(
    "Hello Welcome to Eth Snipper bot 😇\n\nCommands are:\n/start\n/help\n\nThere you go 👍👍 \n\n"
  )
);
bot.help((ctx: { reply: (arg0: string) => any }) =>
  ctx.reply(
    "If a token has been bought\n send command SELL to sell the bought token\n\n 🥳"
  )
);
// bot.hears("true", (ctx: { [x: string]: any; reply: (arg0: string) => any }) =>
//   ctx.reply(`buy success ${ctx.message.chat.id}`)
// );

bot.launch();
