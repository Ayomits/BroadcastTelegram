import { rabbitMq } from "../db/rabbitmq";

export async function publishMessage(message: string, content: object) {
  const channel = await rabbitMq.createChannel();

  const success = channel.sendToQueue(
    message,
    Buffer.from(JSON.stringify(content)),
    {
      persistent: true,
    }
  );

  await channel.close();
  return success;
}
