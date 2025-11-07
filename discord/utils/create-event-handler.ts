import { Client } from "discord.js";

export function createEventHandler(
  name: string,
  handler: (...args: any[]) => any
) {
  return {
    register(client: Client) {
      client.on(name, handler);
    },
  };
}
