import { Events, Message } from "discord.js";
import { createEventHandler } from "../../../utils/create-event-handler";

export const postCreationHandler = createEventHandler(
  Events.MessageCreate,
  (message: Message) => {
    if (message.author.bot || !message.content) return;

    return message.reply(message.content);
  }
);
