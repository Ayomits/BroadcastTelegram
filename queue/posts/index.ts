import { rabbitMq } from "#/shared/db/rabbitmq";
import { QueueMessages } from "#/shared/queue/const";
import { postCreatedConsumer } from "./consumers/post-created.consumer";

export async function registerTelegramPostMessages() {
  const channel = await rabbitMq.createChannel();

  await channel.assertQueue(QueueMessages.telegram.post.created, {
    durable: true,
    autoDelete: false,
  });

  await channel.consume(
    QueueMessages.telegram.post.created,
    (msg) => {
      postCreatedConsumer(msg!);
    },
    {
      noAck: true,
    }
  );
}
