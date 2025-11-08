import { initEvents } from "./app/events";
import { configService } from "#/shared/config";
import { logger } from "#/shared/logger";
import { createStoreConnection } from "#/shared/db/connections";
import { discordClient } from "./client";

export async function initDiscordClient() {
  initEvents(discordClient);

  await createStoreConnection().then(() =>
    logger.info("Store connections successed")
  );

  discordClient
    .login(configService.getOrThrow("DISCORD_TOKEN"))
    .then(() =>
      logger.success(
        `Discord client created: ${discordClient.user?.username} | ${discordClient.user?.id}`
      )
    );
}

initDiscordClient();
