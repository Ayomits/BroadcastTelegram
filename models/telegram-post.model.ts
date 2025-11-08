import { getModelForClass, prop } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

export class TelegramPost extends TimeStamps {
  @prop({ required: true })
  chat_id!: number;

  @prop({ unique: true, required: true })
  message_id!: number;

  @prop({ unique: true, required: true })
  discord_message_id?: string;
}

export const TelegramPostModel = getModelForClass(TelegramPost);
