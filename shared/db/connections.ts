import { logger } from "../logger";
import { createMongoDbConnection } from "./mongo";
import { createRabbitConnection } from "./rabbitmq";
import { createRedisConnection } from "./redis";

export async function createStoreConnection() {
  await createRedisConnection().then(() => logger.info("Redis connected"));
  await createMongoDbConnection().then(() => logger.info("Mongodb connected"));
  await createRabbitConnection().then(() => logger.info("Rabbitmq connected"));
}
