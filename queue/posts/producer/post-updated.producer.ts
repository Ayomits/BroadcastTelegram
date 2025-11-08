import { QueueMessages } from "#/queue/const";
import { publishMessage } from "#/queue/utils/publishMessage";
import { TelegramPostUpdatedPayload } from "../types";

export const postUpdatedProduce = (content: TelegramPostUpdatedPayload) => {
  publishMessage(QueueMessages.telegram.post.update, content);
};
