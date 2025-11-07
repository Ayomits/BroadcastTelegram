/**
 * Подпись телеграм означает, что принимать будет телеграм бот
 * Подпись дискорд означает, что принимать будет дискорд бот
 */
export const QueueTopics = {
  // Telegram
  telegram: {
    postCreated: "telegram-post.created",
    postDeleted: "telegram-post.deleted",
    postUpdate: "telegram-post.update",
  },

  discord: {
    postCreated: "discord.post.created",
    postDeleted: "discord.post.deleted",
    postUpdate: "discord.post.update",
  },
};
