import { AppContext } from "telegram/utils/ctx";

export type AppCommand = (ctx: AppContext) => any | Promise<any>;
