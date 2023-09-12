---
title: $guildSplash
description: $guildSplash will return a guild's invite background (if unlocked).
id: guildSplash
---

`$guildSplash` will return a guild's invite background (if unlocked).

## Usage

```php
$guildSplash[guildID?;size?;dynamic?;extension?]
```

## Parameters

| Field      | Type    | Description                               | Required |
| ---------- | ------- | ----------------------------------------- | :------: |
| guildID?   | integer | The ID of the guild.                      |  false   |
| size?      | integer | The size of the image.                    |  false   |
| dynamic?   | boolean | 1. **true** (default) <br /> 2. **false** |  false   |
| extension? | string  | Image format.                             |  false   |

## Example(s)

This will return the guild's invite background (if unlocked):

```javascript
bot.command({
  name: "guildSplash",
  code: `
  $guildSplash[$guildID]
  `,
});
```
