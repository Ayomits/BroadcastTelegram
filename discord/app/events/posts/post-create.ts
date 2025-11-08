import { createEventHandler } from "#/discord/utils/create-event-handler";
import { postCreationProduce } from "#/queue/posts/producer/post-created.producer";
import { Events, Message } from "discord.js";

export const postCreationHandler = createEventHandler(
  Events.MessageCreate,
  async (msg: Message) => {
    if (msg.author.bot || !msg.content) return;

    postCreationProduce({
      discord_message_id: msg.id,
      images: [],
      text: msg.content,
    });

    return msg.reply(msg.content);
  }
);
