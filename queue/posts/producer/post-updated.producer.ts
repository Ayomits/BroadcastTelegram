import { QueueMessages } from "#/shared/queue/const";
import { publishMessage } from "#/shared/queue/publishMessage";
import { TelegramPostUpdatedPayload } from "../types";

export const postUpdatedProduce = (content: TelegramPostUpdatedPayload) => {
  publishMessage(QueueMessages.telegram.post.update, content);
};
