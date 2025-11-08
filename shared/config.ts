import { config } from "dotenv";

export class ConfigService {
  constructor() {
    config({ quiet: true });
  }

  static create() {
    return new ConfigService();
  }

  get(key: string) {
    return process.env[key];
  }

  getOrThrow(key: string, errorMsg?: string) {
    const value = this.get(key);
    if (!value) {
      throw new Error(errorMsg ?? `Not value provided by key ${key}`);
    }
    return value;
  }
}

export const configService = ConfigService.create();

export const Env = {
  AppEnv: configService.get("APP_ENV") ?? ("dev" as "dev" | "prod"),
  MongoUrl:
    configService.get("MONGO_URL") ??
    "mongodb://localhost:27019?authSource=admin",
  RedisHost: configService.get("REDIS_HOST"),
  RedisPort: Number(configService.get("REDIS_PORT") ?? 6379),
  RedisUser: configService.get("REDIS_USER"),
  RedisPswd: configService.get("REDIS_PASSWORD"),
  RabbitMQUri: configService.get("RABBITMQ_URI"),
};
