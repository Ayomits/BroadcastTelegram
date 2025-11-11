import { configService } from "#/shared/config";
import { createStoreConnection } from "#/shared/db/connections";
import { logger } from "#/shared/logger";
import { HttpStatusCode } from "axios";
import express from "express";

const app = express();

app.use(express.json());

app.get("/discord/login", (req, res) => {
  const [clientId, clientSecret, redirectUri] = [
    configService.getOrThrow("DISCORD_CLIENT_ID"),
    configService.getOrThrow("DISCORD_CLIENT_SECRET"),
    configService.getOrThrow("DISCORD_REDIRECT_URI"),
  ];

  const telegramId = req.query.telegram_id;

  if (!telegramId) {
    return res.status(HttpStatusCode.UnprocessableEntity).json({
      message: "Telegram ID is not provided",
    });
  }

  const params = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
    state: telegramId.toString(),
  });
});

app.get("/discord/callback", () => {});

app.listen(4200, async () => {
  await createStoreConnection();
  logger.info(`App started: http://localhost:4200`);
});
