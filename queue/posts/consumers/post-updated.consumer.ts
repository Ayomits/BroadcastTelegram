import { AppConfig } from "#/app.config";
import { Consumer } from "#/shared/queue/types";
import { telegramApp } from "#/telegram/app";
import { TelegramPostUpdatedPayload } from "../types";

export const postUpdatedConsumer: Consumer = async (msg) => {
  const data = JSON.parse(msg.content.toString()) as TelegramPostUpdatedPayload;

  await telegramApp.api
    .editMessageText(AppConfig.chat_id, data.telegram_message_id, data.text)
    .catch(null);
};
