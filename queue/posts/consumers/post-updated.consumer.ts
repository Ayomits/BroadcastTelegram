import { AppConfig } from "#/app.config";
import { Consumer } from "#/queue/utils/types";
import { logger } from "#/shared/logger";
import { telegramApp } from "#/telegram/app";
import { TelegramPostUpdatedPayload } from "../types";

export const postUpdatedConsumer: Consumer = async (msg) => {
  const data = JSON.parse(msg.content.toString()) as TelegramPostUpdatedPayload;

  try {
    await telegramApp.api.editMessageText(
      AppConfig.chat_id,
      data.telegram_message_id,
      data.text,
      {
        parse_mode: "HTML",
      }
    );
  } catch (err) {
    logger.error(err);
  }
};
