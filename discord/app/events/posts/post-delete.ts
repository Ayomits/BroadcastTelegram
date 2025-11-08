import { createEventHandler } from "discord/utils/create-event-handler";
import { Events, PartialMessage } from "discord.js";
import { postDeletionProduce } from "#/queue/posts/producer/post-deleted.producer";
import { PostModel } from "#/models/post.model";

export const postDeletionHandler = createEventHandler(
  Events.MessageDelete,
  async (msg: PartialMessage) => {
    const existed = await PostModel.findOne({ discord_message_id: msg.id });

    if (!existed) return;

    postDeletionProduce({
      discord_message_id: msg.id,
      telegram_chat_id: existed.telegram_chat_id,
      telegram_message_id: existed.telegram_message_id,
    });
  }
);
