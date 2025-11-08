export type TelegramPostPayload = {
  text: string;
  images: string[];

  discord_message_id: string;
};

export type TelegramPostUpdatedPayload = TelegramPostPayload & {
  telegram_message_id: number;
};

export type TelegramPostDeletedPayload = {
  chat_id: number;
  message_id: number;
};
