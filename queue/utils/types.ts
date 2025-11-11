import { Channel, ConsumeMessage } from "amqplib";

export type Consumer = (msg: ConsumeMessage, ch: Channel) => Promise<any> | any;
