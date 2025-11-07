/**
 * Подпись телеграм означает, что принимать будет телеграм бот
 * Подпись дискорд означает, что принимать будет дискорд бот
 */
export const QueueMessages = {
  // Telegram
  telegram: {
    post: {
      created: "telegram-post.created",
      deleted: "telegram-post.deleted",
      update: "telegram-post.update",
    },
  },

  // Discord
  discord: {
    post: {
      created: "discord.post.created",
      deleted: "discord.post.deleted",
      update: "discord.post.update",
    },
  },
};
