import { AppConfig } from "#/app.config";
import { PostRepository } from "#/repositories/post.repository";
import { Consumer } from "#/queue/utils/types";
import { telegramApp } from "#/telegram/app";
import { TelegramPostPayload } from "../types";
import { logger } from "#/shared/logger";

export const postCreatedConsumer: Consumer = async (msg, ch) => {
  const data = JSON.parse(msg.content.toString()) as TelegramPostPayload;
  try {
    const tgMsg = await telegramApp.api
      .sendMessage(AppConfig.chat_id, data.text, {
        parse_mode: "HTML",
      })
      .catch(null);

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
    ch.ack(msg, false);
  } catch (err) {
    ch.nack(msg, false, false);
    logger.error(err);
  }
};
