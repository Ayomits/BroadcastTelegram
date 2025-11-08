import { getModelForClass, prop } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

export class DiscordPost extends TimeStamps {
  @prop({ required: true })
  telegram_message_id!: number;

  @prop({ required: true })
  telegram_chat_id!: number;

  @prop({ required: true })
  discord_message_id!: string;
}

export const DiscordPostModel = getModelForClass(DiscordPost);
