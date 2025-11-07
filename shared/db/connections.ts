import { logger } from "../logger";
import { createMongoDbConnection } from "./mongo";
import { createNatsConnection } from "./nats";
import { createRedisConnection } from "./redis";

export async function createStoreConnection() {
  await createRedisConnection().then(() => logger.info("Redis connected"));
  await createMongoDbConnection().then(() => logger.info("Mongodb connected"));
  await createNatsConnection().then(() => logger.info("Nats connected"));
}
