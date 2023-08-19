---
title: $slowmode
description: $slowmode will change a channel's slowmode.
id: slowmode
---

`$slowmode` will change a channel's slowmode.

## Usage

```php
$slowmode[time;channelID?]
```

## Parameters

| Field      | Type           | Description                                  | Required |
| ---------- | -------------- | -------------------------------------------- | :------: |
| time       | string, number | The new slowmode of the given channel.       |   true   |
| channelID? | integer        | The ID of the channel that will be modified. |  false   |

This has a max time of 21600000 seconds (6 hours).

## Example(s)

This will change the channel's slowmode to three minutes:

```javascript
bot.command({
    name: 'slowmode',
    code: `
   $slowmode[3m;$channelID]`
});
```

This will change the channel's slowmode to 6 hours:

```javascript
bot.command({
    name: 'slowmode',
    code: `
   $slowmode[6h;$channelID]`
});
```