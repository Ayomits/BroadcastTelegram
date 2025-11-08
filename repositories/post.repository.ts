import { Post, PostModel } from "#/models/post.model";
import { useCachedDelete, useCachedQuery } from "#/shared/db/mongo";

export class PostRepository {
  private ttl = 600_000;

  static create() {
    return new PostRepository();
  }

  async findOne(dsMsgId: string) {
    return await useCachedQuery(
      this.generateId(dsMsgId),
      this.ttl,
      async () => await PostModel.findOne({ discord_message_id: dsMsgId })
    );
  }

  async createOne(options: Post) {
    return await useCachedQuery(
      this.generateId(options.discord_message_id),
      this.ttl,
      async () => await PostModel.create(options)
    );
  }

  async deleteOne(dsMsgId: string) {
    return await useCachedDelete(
      this.generateId(dsMsgId),
      async () => await PostModel.deleteOne({ discord_message_id: dsMsgId })
    );
  }

  private generateId(dsMsgId: string) {
    return `${dsMsgId}-discord-post`;
  }
}
