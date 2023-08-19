---
title: $setGuildName
description: $setGuildName will change a guilds' name.
id: setGuildName
---

`$setGuildName` will change a guilds' name.

## Usage

```php
$setGuildName[name;guildID?]
```

## Parameters

| Field    | Type    | Description                                      | Required |
| -------- | ------- | ------------------------------------------------ | :------: |
| name     | string  | The new guild name.                              |   true   |
| guildID? | integer | The ID of the guild whose name will be modified. |  false   |

## Example(s)

This will change guild's name you're executing the command in to your username:

```javascript
bot.command({
    name: 'setGuildName',
    code: `
   $setGuildName[$username[$authorID];$guildID]`
});
```