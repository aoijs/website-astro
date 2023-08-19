---
title: $isTicket
description: $isTicket will return either true or false depending on the channel being a ticket channel.
id: isTicket
---

`$isTicket` will return either true or false depending on the channel being a ticket channel.

## Usage

```php
$isTicket[channelID?]
```

## Parameters

| Field      | Type    | Description | Required |
| ---------- | ------- | ----------- | :------: |
| channelID? | integer | Channel ID. |  false   |

## Example(s)

This will check if the current channel is a ticket channel created by `$newTicket`:

```javascript
bot.command({
    name: "isTicket",
    code: `
    $isTicket[$channelID]
    `
});
```