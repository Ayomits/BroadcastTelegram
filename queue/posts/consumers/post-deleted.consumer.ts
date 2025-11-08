import { PostModel } from "#/models/post.model";
import { Consumer } from "#/shared/queue/types";
import { telegramApp } from "#/telegram/app";
import { TelegramPostDeletedPayload } from "../types";

export const postDeletedConsumer: Consumer = async (msg) => {
  const data = JSON.parse(msg.content.toString()) as TelegramPostDeletedPayload;
  await Promise.all([
    telegramApp.api
      .deleteMessage(data.telegram_chat_id, data.telegram_message_id)
      .catch(() => null),
    PostModel.deleteOne({
      discord_message_id: data.discord_message_id,
    }),
  ]);
};
