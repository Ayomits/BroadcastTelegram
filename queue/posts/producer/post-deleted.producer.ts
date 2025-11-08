import { QueueMessages } from "#/shared/queue/const";
import { publishMessage } from "#/shared/queue/publishMessage";
import { TelegramPostDeletedPayload } from "../types";

export const postDeletionProduce = (content: TelegramPostDeletedPayload) => {
  publishMessage(QueueMessages.telegram.post.deleted, content);
};
