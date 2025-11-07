import { initCommands } from "./app/commands";
import { initMenus } from "./app/menu";
import { initMiddlewares } from "./app/middlewares";
import { logger } from "shared/logger";
import { createStoreConnection } from "#/shared/db/connections";
import { telegramApp } from "./app";

export async function initTelegramClient() {
  initMiddlewares(telegramApp);
  initMenus(telegramApp);
  await initCommands(telegramApp);

  await createStoreConnection().then(() =>
    logger.info("Store connections successed")
  );

  telegramApp.start({
    onStart: () =>
      logger.success(
        `Telegram client created: ${telegramApp.botInfo.first_name}`
      ),
    allowed_updates: ["message", "callback_query"],
  });
}

initTelegramClient();
