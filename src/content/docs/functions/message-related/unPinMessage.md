---
title: $unPinMessage
description: $unPinMessage will unpin a given message.
id: unPinMessage
---

`$unPinMessage` will unpin a given message.

## Usage

```php
$unPinMessage[messageID?;channelID?]
```

## Parameters

| Field     | Type    | Description                                               | Required |
| --------- | ------- | --------------------------------------------------------- | :------: |
| messageID | integer | The ID of the message to unpin.                           |  false   |
| channelID | integer | The ID of the channel of where the message is located in. |  false   |

## Example(s)

This will pin the bot's message and unpin it after two seconds:

```javascript
bot.command({
    name: 'unPinMessage',
    code: `
  $unPinMessage[$get[id]]
  $wait[2s]
  $pinMessage[$get[id]]
  $let[id;$sendMessage[Hello!;true]
  ` // using $let & $get to save the message ID
});
```