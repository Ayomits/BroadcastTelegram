import {
  ConnectionOptions,
  connect,
  NatsConnection,
  Msg,
  NatsError,
} from "nats";
import { Env } from "../config";

export class NatsClient {
  private nc: NatsConnection | null = null;

  private _options: ConnectionOptions;

  constructor(opts: ConnectionOptions) {
    this._options = opts;
  }

  static create(opts: ConnectionOptions) {
    return new NatsClient(opts);
  }

  async connect(options?: ConnectionOptions) {
    this.nc = await connect({ ...this._options, ...options });
  }

  get client() {
    return this.nc;
  }
}

export const nats = NatsClient.create({});

export async function createNatsConnection() {
  return await nats.connect({
    servers: Env.NatsServer,
  });
}

export type NatsConsumer = (
  err: NatsError | null,
  msg: Msg
) => Promise<any> | any;
