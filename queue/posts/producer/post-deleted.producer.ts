import { QueueMessages } from "#/queue/const";
import { publishMessage } from "#/queue/utils/publishMessage";
import { TelegramPostDeletedPayload } from "../types";

export const postDeletionProduce = (content: TelegramPostDeletedPayload) => {
  publishMessage(QueueMessages.telegram.post.deleted, content);
};
