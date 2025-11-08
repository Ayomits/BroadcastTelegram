import amqplib from "amqplib";
import { Env } from "../config";

export let rabbitMq: amqplib.ChannelModel;

export async function createRabbitConnection() {
  rabbitMq = await amqplib.connect(Env.RabbitMQUri);
}
