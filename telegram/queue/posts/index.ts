import { nats } from "#/shared/db/nats";
import { QueueTopics } from "#/shared/queue/const";

export function registerTelegramPostTopics() {
  nats.client?.subscribe(QueueTopics.telegram.postCreated, {
    callback: (err, msg) => {},
  });
}
