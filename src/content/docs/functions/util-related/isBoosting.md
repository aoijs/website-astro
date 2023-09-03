---
title: $isBoosting
description: $isBoosting will check if the given user is boosting the given guild.
id: isBoosting
---

`$isBoosting` will check if the given user is boosting the given guild.

## Usage

```php
$isBoosting[userID?;guildID?]
```

## Parameters

| Field    | Type    | Description                                    | Required |
| -------- | ------- | ---------------------------------------------- | :------: |
| userID?  | integer | User ID to check if they're boosting.          |  false   |
| guildID? | integer | The guild ID of where they boosted the server. |  false   |

## Example(s)

This will return `false` or `true` depending on if you boosted this server:

```javascript
bot.command({
  name: "isBoosting",
  code: `
  $isBoosting[$authorID;$guildID]
  `,
});
```
