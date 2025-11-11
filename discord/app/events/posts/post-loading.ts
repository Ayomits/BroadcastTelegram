import { createEventHandler } from "#/discord/utils/create-event-handler";
import { PostModel } from "#/models/post.model";
import { postUpdatedProduce } from "#/queue/routes/posts/producer/post-updated.producer";
import {
  TelegramPostDeletedPayload,
} from "#/queue/routes/posts/types";
import { MarkdownTransformer } from "#/shared/messages/transformer";
import { Client, Events, TextChannel } from "discord.js";

export const postLoadingHandler = createEventHandler(
  Events.ClientReady,
  async (client: Client) => {
    const posts = await PostModel.find();

    const postsToDelete: TelegramPostDeletedPayload[] = [];
    const postToUpdate: any[] = [];

    for (const post of posts) {
      const channel = (await client.channels
        .fetch(post.discord_channel_id, {
          cache: true,
        })
        .catch(null)) as TextChannel;

      const pushPostDelete = () =>
        postsToDelete.push({
          discord_message_id: post.discord_message_id,
          telegram_chat_id: post.telegram_chat_id,
          telegram_message_id: post.telegram_message_id,
        });

      if (!channel) {
        pushPostDelete();
        continue;
      }

      try {
        const message = await channel.messages
          .fetch(post.discord_message_id)
          .catch(null);
        if (!message) {
          pushPostDelete();
          continue;
        }

        if (!message.content || message.attachments.size === 0) {
          pushPostDelete();
          continue;
        }

        const transformedContent = new MarkdownTransformer(
          message.content
        ).transform();

        postToUpdate.push(
          postUpdatedProduce({
            discord_channel_id: channel.id,
            discord_message_id: message.id,
            discord_guild_id: message.guild.id!,
            telegram_message_id: post.telegram_chat_id,
            text: transformedContent,
            images: [],
          })
        );
      } catch {
        pushPostDelete();
      }
    }

    await Promise.all([...postToUpdate, ...postsToDelete]);
  }
);
