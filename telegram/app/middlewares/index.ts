
import { AppContext } from "telegram/utils/ctx";
import { autoRetry } from "@grammyjs/auto-retry";
import { hydrate } from "@grammyjs/hydrate";
import { Bot } from "grammy";

export function initMiddlewares(app: Bot<AppContext>) {
  app.use(hydrate());
  app.api.config.use(autoRetry());
}
