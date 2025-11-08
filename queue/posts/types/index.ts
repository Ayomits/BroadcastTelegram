export type TelegramPostPayload = {
  text: string;
  images: string[];

  discord_guild_id: string;
  discord_channel_id: string;
  discord_message_id: string;
};

export type TelegramPostUpdatedPayload = TelegramPostPayload & {
  telegram_message_id: number;
};

export type TelegramPostDeletedPayload = {
  discord_message_id: string;
  telegram_chat_id: number;
  telegram_message_id: number;
};
