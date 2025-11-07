import { Env } from "#/shared/config";
import { Bot } from "grammy";
import { AppContext } from "./utils/ctx";

export const telegramApp = new Bot<AppContext>(Env.TelegramToken);
