import { ConsumeMessage } from "amqplib";

export type Consumer = (msg: ConsumeMessage) => Promise<any> | any;
