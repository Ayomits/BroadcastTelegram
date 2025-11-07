export type TelegramPostPayload = {
  text: string;
  images: string[];
};

export type TelegramPostDeletedPayload = {
  chat_id: number;
  message_id: number;
};
