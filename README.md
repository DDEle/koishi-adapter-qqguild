# koishi-adapter-qqguild
[![npm](https://img.shields.io/npm/v/koishi-adapter-qqguild?style=flat-square)](https://www.npmjs.com/package/koishi-adapter-qqguild)
[![npm-download](https://img.shields.io/npm/dw/koishi-adapter-qqguild?style=flat-square)](https://www.npmjs.com/package/koishi-adapter-qqguild)

用于 **[Koishi v3](https://github.com/koishijs/koishi)** 的 QQ 频道官方机器人适配器，基于 [@qq-guild-sdk/core](https://www.npmjs.com/package/@qq-guild-sdk/core) 实现。

1. 前往 [QQ 频道管理后台](https://bot.q.qq.com/open/#/type?appType=2) 注册
2. 登陆进入 [机器人管理后台](https://bot.q.qq.com/open/#/botlogin) 并创建官方机器人
3. 创建完成后，在 [频道机器人开发设置](https://bot.q.qq.com/#/developer/developer-setting) 获取机器人基本数据 [id, token, key(secret)]
4. 将上面的基本数据作为机器人配置项即可使用

参考文档：<https://nwylzw.github.io/qq-guild-sdk/api>

另有[用于 Koishi v4 的版本](https://www.npmjs.com/package/%40koishijs%2Fplugin-adapter-qqguild)。

## 用法
``` javascript
// 你的配置文件
const { Bot: GBot } = require("koishi-adapter-qqguild");
module.exports = {
  qqguild: {
    app: {
      id: yourSecrets.qqGuildBotId,
      token: yourSecrets.qqGuildToken,
      key: yourSecrets.qqGuildSecret,
    },
    indents: GBot.Intents.AT_MESSAGE,
  },
  bots: [{ type: 'qqguild' }],
}
```
