import { nats } from "#/shared/db/nats";
import { QueueMessages } from "#/shared/queue/const";
import { telegramPostCreatedConsumer } from "./consumers/post-created.consumer";

export function registerTelegramPostMessages() {
  nats.client?.subscribe(QueueMessages.telegram.post.created, {
    callback: telegramPostCreatedConsumer,
  });
}
