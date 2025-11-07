import { CommandGroup } from "@grammyjs/commands";
import { Bot } from "grammy";
import { startCommand } from "./start";
import { AppContext } from "telegram/utils/ctx";

function initCommandsRouting(app: Bot<AppContext>) {
  const core = new CommandGroup<AppContext>();
  core.command("start", "Начать взаимодействие с ботом", startCommand);

  return core;
}

export async function initCommands(app: Bot<AppContext>) {
  const commands = initCommandsRouting(app);

  app.use(commands);

  await commands.setCommands(app);
}
