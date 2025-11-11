import { registerTelegramPostConsumers } from "./routes/posts";

export function registerTelegramQueue() {
  registerTelegramPostConsumers();
}
