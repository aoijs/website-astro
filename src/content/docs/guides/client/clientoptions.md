---
title: Client Options
description: This page is covering all aoi.js client options and what they do.
id: options
---

**This page is about all aoi.js Client Options and what they do.**

```js title="index.js"
const { AoiClient } = require("aoi.js");

const bot = new AoiClient({
    token : string,
    prefix : string,
    intents : ["MessageContent", "Guilds", "GuildMessages"],
    events : ["onMessage", "onJoin", "onLeave"],
    disableFunctions? : ["$function", "$function"],
    plugins? : "./path/to/directory",
    respondToBots? : boolean,
    guildOnly? : boolean,
    cache? : {
        users : number,
        messages : number,
    },
    database? : {
        type : "aoi.db",
        db : require("@akarui/aoi.db"),
        tables : ["main"],
        path : "./database/",
        extraOptions : {
            dbType: "KeyValue",
        }
    }, // Example refers to @akarui/aoi.db, other databases are not included in this Example.
    fetchInvites: {
        cacheInviters : boolean,
        enabled : boolean,
    },
    suppressAllErrors? : boolean,
    errorMessage? : string,
    aoiAutoUpdate? : boolean,
    aoiWarning? : boolean,
    aoiLogs? : boolean,
    respondOnEdit? : {
        commands : boolean,
        alwaysExecute? : boolean,
        nonPrefixed? : boolean,
        time : number
    },
});
```

---

| OPTION              |  INPUT  | EXPLANATION                                                                             |
| ------------------- | :-----: | --------------------------------------------------------------------------------------- |
| `token`             | string  | Your Discord Bot Token                                                                  |
| `prefix`            | string  | Your Discord Bot Prefix                                                                 |
| `intents`           | string  | Required Intents                                                                        |
| `events`            | string  | Required Events                                                                         |
| `disableFunctions`  | string  | aoi.js functions you want to make unuseable                                             |
| `plugins`           | string  | aoi.js plugins directory                                                                |
| `respondToBots`     | boolean | Either give your bot the ability to respond to bots or remove it.                       |
| `guildOnly`         | boolean | Either give your bot the ability to respond in Direct Message or remove it.             |
| `cache`             | string  | Client Cache Options.                                                                   |
| `database`          | string  | Client Database Options.                                                                |
| `fetchInvites`      | string  | Setup the built-in invite system.                                                       |
| `suppressAllErrors` | boolean | Suppress all occuring errors.                                                           |
| `errorMessage`      | string  | Send a given error message when `suppressAllErrors` executes.                           |
| `aoiAutoUpdate`     | boolean | Automatically update aoi.js if a update is available.                                   |
| `aoiWarning`        | boolean | Disable aoiWarning logs which are sent to your console.                                 |
| `aoiLogs`           | boolean | Disable aoiLogs which are sent to your console.                                         |
| `respondOnEdit`     | string  | Give your bot the ability to respond to edited messages and execute the given commands. |