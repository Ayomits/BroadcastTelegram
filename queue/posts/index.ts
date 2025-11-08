import { rabbitMq } from "#/shared/db/rabbitmq";
import { QueueMessages } from "#/queue/const";
import { postCreatedConsumer } from "./consumers/post-created.consumer";
import { postDeletedConsumer } from "./consumers/post-deleted.consumer";
import { postUpdatedConsumer } from "./consumers/post-updated.consumer";

export async function registerTelegramPostConsumers() {
  const channel = await rabbitMq.createChannel();

  await Promise.all([
    channel.assertQueue(QueueMessages.telegram.post.created, {
      durable: true,
      autoDelete: false,
    }),
    channel.assertQueue(QueueMessages.telegram.post.update, {
      durable: true,
      autoDelete: false,
    }),
    channel.assertQueue(QueueMessages.telegram.post.deleted, {
      durable: true,
      autoDelete: false,
    }),
  ]);

  await Promise.all([
    channel.consume(
      QueueMessages.telegram.post.created,
      (msg) => {
        postCreatedConsumer(msg!);
      },
      {
        noAck: true,
      }
    ),
    channel.consume(
      QueueMessages.telegram.post.deleted,
      (msg) => {
        postDeletedConsumer(msg!);
      },
      {
        noAck: true,
      }
    ),
    channel.consume(
      QueueMessages.telegram.post.update,
      (msg) => postUpdatedConsumer(msg!),
      { noAck: true }
    ),
  ]);
}
