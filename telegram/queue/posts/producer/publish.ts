import { nats } from "#/shared/db/nats";
import { QueueMessages } from "#/shared/queue/const";
import { TelegramPostDeletedPayload, TelegramPostPayload } from "../types";


export function publishPostCreatedMessage(payload: TelegramPostPayload) {
  return nats.client?.publish(
    QueueMessages.telegram.post.created,
    JSON.stringify(payload)
  );
}
export function publishPostUpdatedMessage(payload: TelegramPostPayload) {
  return nats.client?.publish(
    QueueMessages.telegram.post.update,
    JSON.stringify(payload)
  );
}
export function publishPostDeletedMessage(payload: TelegramPostDeletedPayload) {
  return nats.client?.publish(
    QueueMessages.telegram.post.deleted,
    JSON.stringify(payload)
  );
}
