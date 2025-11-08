import { getModelForClass, prop } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

export class Post extends TimeStamps {
  @prop({ required: true })
  telegram_message_id!: number;

  @prop({ required: true })
  telegram_chat_id!: number;

  @prop({ required: true })
  discord_message_id!: string;

  @prop({ required: true })
  discord_channel_id!: string;

  @prop({ required: true })
  discord_guild_id!: string;
}

export const PostModel = getModelForClass(Post);
