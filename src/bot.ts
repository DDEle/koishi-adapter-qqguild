import { Bot as GBot, Guild as GGuild } from '@qq-guild-sdk/core';
import { Bot, Session } from 'koishi-core';

export interface GuildInfo {
  groupId: string;
  groupName: string;
}

const adaptGuild = (guild: GGuild): GuildInfo => ({
  groupId: guild.id,
  groupName: guild.name,
});

export class QQGuildBot extends Bot {
  $innerBot?: GBot;

  async sendMessage(
    channelId: string,
    content: string,
    guildId?: string,
  ): Promise<string> {
    if (!this.$innerBot) throw new Error('no internal bot');
    const resp = await this.$innerBot.send.channel(channelId, content);
    return resp.id;
  }

  async getGuildList(): Promise<GuildInfo[]> {
    if (!this.$innerBot) throw new Error('no internal bot');
    return this.$innerBot.guilds.then((guilds) => guilds.map(adaptGuild));
  }

  async $replyMessage(
    messageId: string,
    channelId: string,
    content: string,
  ): Promise<string> {
    if (!this.$innerBot) throw new Error('no internal bot');
    const resp = await this.$innerBot.send.channel.reply(
      messageId,
      channelId,
      content,
    );
    return resp.id;
  }
}

QQGuildBot.prototype[Session.send] = async function (
  session: Session,
  message: string,
): Promise<void> {
  if (!session.channelId)
    throw new Error('QQ Guild session without channel id:' + session);
  if (!message) return;
  if (
    session.platform === 'qqguild' &&
    session.type === 'message' &&
    session.subtype === 'group' &&
    session.messageId
  )
    await this.$replyMessage(session.messageId, session.channelId, message);
  else {
    await this.sendMessage(session.channelId, message, session.groupId);
  }
};
