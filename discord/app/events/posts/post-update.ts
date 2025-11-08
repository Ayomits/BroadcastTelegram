import { createEventHandler } from "discord/utils/create-event-handler";
import { Events, Message, PartialMessage } from "discord.js";
import { PostModel } from "#/models/post.model";
import { postUpdatedProduce } from "#/queue/posts/producer/post-updated.producer";

export const postMutationHandler = createEventHandler(
  Events.MessageUpdate,
  async (_: Message, msg: Message) => {
    if (!msg.content) return;
    const existed = await PostModel.findOne({
      discord_message_id: msg.id,
    });

    if (!existed) return;

    postUpdatedProduce({
      discord_message_id: msg.id,
      discord_channel_id: msg.channelId,
      discord_guild_id: msg.guildId!,
      telegram_message_id: existed.telegram_message_id,
      text: msg.content,
      images: [],
    });
  }
);
