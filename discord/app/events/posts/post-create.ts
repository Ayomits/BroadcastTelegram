import { AppConfig } from "#/app.config";
import { createEventHandler } from "#/discord/utils/create-event-handler";
import { postCreationProduce } from "#/queue/routes/posts/producer/post-created.producer";
import { MarkdownTransformer } from "#/shared/messages/transformer";
import { Events, Message } from "discord.js";

export const postCreationHandler = createEventHandler(
  Events.MessageCreate,
  async (msg: Message) => {
    if (
      msg.author.bot ||
      !msg.content ||
      AppConfig.allowedChannelId !== msg.channelId
    )
      return;

    const transformedContent = MarkdownTransformer.transform(msg.content);

    postCreationProduce({
      discord_message_id: msg.id,
      discord_channel_id: msg.channelId!,
      discord_guild_id: msg.guildId!,
      images: [],
      text: transformedContent,
    });
  }
);
