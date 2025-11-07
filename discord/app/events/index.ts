import { Client } from "discord.js";
import { postCreationHandler } from "./posts/post-create";
import { postDeletionHandler } from "./posts/post-delete";
import { postMutationHandler } from "./posts/post-update";

export function initEvents(client: Client) {
  // posts
  postCreationHandler.register(client);
  postDeletionHandler.register(client);
  postMutationHandler.register(client);
}
