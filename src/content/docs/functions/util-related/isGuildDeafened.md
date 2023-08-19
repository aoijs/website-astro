---
title: $isGuildDeafened
description: $isGuildDeafened is similar but not to confuse with `$isDeafen`, this will check if the user is server deafened.
id: isGuildDeafened
---

`$isGuildDeafened` is similar but not to confuse with `$isDeafen`, this will check if the user is server deafened.

## Usage

```php
$isGuildDeafened[userID?;guildID?]
```

## Parameters

| Field    | Type    | Description                                                      | Required |
| -------- | ------- | ---------------------------------------------------------------- | :------: |
| userID?  | integer | The ID of the user you want to check if they're server deafened. |  false   |
| guildID? | integer | The ID of the guild where they're server deafened in.            |  false   |

## Example(s)

This will return either `true` or `false` depending on if you're server deafened or not:

```javascript
bot.command({
    name: 'isGuildDeafened',
    code: `
  $isGuildDeafened
  `
});
```
