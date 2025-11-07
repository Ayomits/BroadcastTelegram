import { Events, Message } from "discord.js";
import { createEventHandler } from "../../../utils/create-event-handler";
import { publishPostCreatedMessage } from "#/telegram/queue/posts/producer/publish";

export const postCreationHandler = createEventHandler(
  Events.MessageCreate,
  (msg: Message) => {
    if (msg.author.bot || !msg.content) return;

    publishPostCreatedMessage({
      text: msg.content,
      images: [],
    });

    return msg.reply(msg.content);
  }
);
