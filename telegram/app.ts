import { configService, Env } from "#/shared/config";
import { Bot } from "grammy";
import { AppContext } from "./utils/ctx";

export const telegramApp = new Bot<AppContext>(
  configService.getOrThrow("TELEGRAM_TOKEN")
);
