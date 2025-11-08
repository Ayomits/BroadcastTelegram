import { TelegramChatConfig } from "#/shared/const/config";
import { Consumer } from "#/shared/queue/types";
import { telegramApp } from "#/telegram/app";
import { TelegramPostPayload } from "../types";

export const postCreatedConsumer: Consumer = async (msg) => {
  const data = JSON.parse(msg.content.toString()) as TelegramPostPayload;

  await telegramApp.api
    .sendMessage(TelegramChatConfig.chat_id, data.text)
    .catch(() => null);
};
