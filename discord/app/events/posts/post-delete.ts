import { createEventHandler } from "discord/utils/create-event-handler";
import { Events, PartialMessage } from "discord.js";

export const postDeletionHandler = createEventHandler(
  Events.MessageDelete,
  (message: PartialMessage) => {}
);
