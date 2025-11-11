import { QueueMessages } from "#/queue/const";
import { publishMessage } from "#/queue/utils/publishMessage";
import { TelegramPostPayload } from "../types";

export const postCreationProduce = (content: TelegramPostPayload) => {
  publishMessage(QueueMessages.telegram.post.created, content);
};
