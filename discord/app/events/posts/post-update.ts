import { createEventHandler } from "discord/utils/create-event-handler";
import { Events, Message, PartialMessage } from "discord.js";

export const postMutationHandler = createEventHandler(
  Events.MessageUpdate,
  (old: Message, new_: Message) => {}
);
