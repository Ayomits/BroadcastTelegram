import { PostRepository } from "#/repositories/post.repository";
import { Consumer } from "#/queue/utils/types";
import { telegramApp } from "#/telegram/app";
import { TelegramPostDeletedPayload } from "../types";

export const postDeletedConsumer: Consumer = async (msg, ch) => {
  const data = JSON.parse(msg.content.toString()) as TelegramPostDeletedPayload;
  const repository = PostRepository.create();
  await Promise.all([
    telegramApp.api
      .deleteMessage(data.telegram_chat_id, data.telegram_message_id)
      .catch(() => null),
    repository.deleteOne(data.discord_message_id),
  ]);
  ch.ack(msg);
};
