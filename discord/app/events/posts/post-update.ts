import { createEventHandler } from "discord/utils/create-event-handler";
import { Events, Message, PartialMessage } from "discord.js";
import { DiscordPostModel } from "#/models/discord-post.model";

export const postMutationHandler = createEventHandler(
  Events.MessageUpdate,
  async (_: Message, new_: Message) => {
    const existed = await DiscordPostModel.findOne({
      discord_message_id: new_.id,
    });

    if (!existed) return;
  }
);
