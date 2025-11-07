import { TelegramChatConfig } from "#/shared/const/config";
import { NatsConsumer } from "#/shared/db/nats";
import { telegramApp } from "#/telegram/app";
import { TelegramPostPayload } from "../types";

export const telegramPostCreatedConsumer: NatsConsumer = (err, msg) => {
  const data = msg.json() as TelegramPostPayload;

  telegramApp.api.sendMessage(TelegramChatConfig.chat_id, data.text);
};
