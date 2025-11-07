import { getModelForClass, prop } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

export class DiscordPost extends TimeStamps {
  @prop({ required: true })
  guild_id!: string;

  @prop({ required: true })
  message_id!: string;

  @prop({ required: true })
  channel_id!: string;
}

export const DiscordPostModel = getModelForClass(DiscordPost);
