import { Adapter } from 'koishi-core';
import { QQGuildBot } from './bot';
import { QQGuildAdapter, AdapterConfig } from './adapter';

export * from '@qq-guild-sdk/core';

declare module 'koishi-core' {
  interface AppOptions {
    qqguild?: AdapterConfig;
  }

  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Bot {
    interface Platforms {
      qqguild: QQGuildBot;
    }
  }
}

Adapter.types['qqguild'] = QQGuildAdapter;
