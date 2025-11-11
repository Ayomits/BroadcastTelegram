import { createEventHandler } from "discord/utils/create-event-handler";
import { Events, Message, PartialMessage } from "discord.js";
import { PostModel } from "#/models/post.model";
import { postUpdatedProduce } from "#/queue/routes/posts/producer/post-updated.producer";
import { PostRepository } from "#/repositories/post.repository";
import { MarkdownTransformer } from "#/shared/messages/transformer";

export const postMutationHandler = createEventHandler(
  Events.MessageUpdate,
  async (_: Message, msg: Message) => {
    if (!msg.content) return;
    const repository = PostRepository.create();
    const existed = await repository.findOne(msg.id);

    if (!existed) return;

    const transformedContent = new MarkdownTransformer(msg.content).transform();

    postUpdatedProduce({
      discord_message_id: msg.id,
      discord_channel_id: msg.channelId,
      discord_guild_id: msg.guildId!,
      telegram_message_id: existed.telegram_message_id,
      text: transformedContent,
      images: [],
    });
  }
);
