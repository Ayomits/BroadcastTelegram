import { QueueMessages } from "#/shared/queue/const";
import { publishMessage } from "#/shared/queue/publishMessage";
import { TelegramPostPayload } from "../types";

export const postCreationProduce = (content: TelegramPostPayload) => {
  publishMessage(QueueMessages.telegram.post.created, content);
};
