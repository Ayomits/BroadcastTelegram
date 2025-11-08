import { Env } from "./shared/config";

export type AppConfig = {
  chat_id: number;
  allowedChannelId: string;
};

const DevConfig: AppConfig = {
  chat_id: -1002975807882,
  allowedChannelId: "1408424880608907364",
};

const ProdConfig: AppConfig = {
  chat_id: 7744053901,
  allowedChannelId: "1420841102570688625",
};

export const AppConfig: AppConfig =
  Env.AppEnv === "dev" ? DevConfig : ProdConfig;
