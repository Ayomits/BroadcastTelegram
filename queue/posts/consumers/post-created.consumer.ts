import { AppConfig } from "#/app.config";
import { PostModel } from "#/models/post.model";
import { PostRepository } from "#/repositories/post.repository";
import { Consumer } from "#/shared/queue/types";
import { telegramApp } from "#/telegram/app";
import { TelegramPostPayload } from "../types";

export const postCreatedConsumer: Consumer = async (msg) => {
  const data = JSON.parse(msg.content.toString()) as TelegramPostPayload;
  const tgMsg = await telegramApp.api
    .sendMessage(AppConfig.chat_id, data.text)
    .catch(() => null);

  if (tgMsg) {
    const repository = PostRepository.create();

    await repository.createOne({
      discord_guild_id: data.discord_guild_id,
      discord_channel_id: data.discord_channel_id,
      discord_message_id: data.discord_message_id,
      telegram_chat_id: tgMsg.chat.id,
      telegram_message_id: tgMsg.message_id,
    });
  }
};
